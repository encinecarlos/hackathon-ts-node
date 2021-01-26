import { RequestHandler } from "express";
const db = require("../config/db");
const vendaProdutoService = require("../service/vendaProduto.service");

export type VendaProps = {
    id: number
    quantidade: number
    total_price: number
    vendedor?: string    
    cliente_id: number
}

export const getVendas: RequestHandler = (req, res) => {
    //res.status(200).json({text: "Retornando Lista de Vendas"});
    db("vendas")
    .then((vendas: VendaProps) => res.status(200).json(vendas))
    .catch((err: any) => res.status(500).json(err));
}

export const saveVenda: RequestHandler = async (req, res) => {
    //res.status(200).json({text: "Salvando Venda"});
    try{
        const payload = {
            total_price: req.body.total_price,
            vendedor: req.body.vendedor,
            cliente_id:  req.body.cliente_id
        }
        
        const venda_id  = await db("vendas").insert(payload);

        //salva na tabela vendas_produtos
        const vendas_produtos = await vendaProdutoService.saveVendaProduto(req.body.produtos, venda_id[0]);

        res.status(201).json(venda_id);

    }catch(error){
        console.log("erro [*********]", error);
        res.status(500).json({mensagem: error.message});
    }

}

export const updateVenda: RequestHandler = (req, res) => {
    //res.status(200).json({text: "Atualizando Venda"});
    db("vendas")
    .update(req.body)
    .where({ id: req.params.id })
    .then(() => res.status(204).json())
    .catch((err: any) => res.status(500).json(err));
}

export const deleteVenda: RequestHandler = (req, res) => {
    //res.status(200).json({text: "Deletando Venda"});
    db("vendas")
    .where({ id: req.params.id })
    .del()
    .then(() =>
      res
        .status(200)
        .json({ status: 200, message: "Venda removida com sucesso" })
    )
    .catch((err: any) => res.status(500).json(err));
}

export default{
    getVendas,
    saveVenda,
    updateVenda,
    deleteVenda
}
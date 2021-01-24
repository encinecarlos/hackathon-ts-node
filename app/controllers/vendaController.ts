import { RequestHandler } from "express";
const db = require("../config/db");

export type VendaProps = {
    id: number
    quantidade: number
    total_price: number
    vendedor: string    
    cliente_id: number
}

export const getVendas: RequestHandler = (req, res) => {
    //res.status(200).json({text: "Retornando Lista de Vendas"});
    db("vendas")
    .then((vendas: VendaProps) => res.status(200).json(vendas))
    .catch((err: any) => res.status(500).json(err));
}

export const saveVenda: RequestHandler = (req, res) => {
    //res.status(200).json({text: "Salvando Venda"});
    db("vendas")
    .insert(req.body)
    .then((data: VendaProps) => res.status(201).json(data))
    .catch((err: any) => res.status(200).json(err.message));
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
        .json({ status: 200, messaghe: "Venda removida com sucesso" })
    )
    .catch((err: any) => res.status(500).json(err));
}

export default{
    getVendas,
    saveVenda,
    updateVenda,
    deleteVenda
}
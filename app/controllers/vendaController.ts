import { RequestHandler } from "express";


export const getVendas: RequestHandler = (req, res) => {
    res.status(200).json({text: "Retornando Lista de Vendas"});
}

export const saveVenda: RequestHandler = (req, res) => {
    res.status(200).json({text: "Salvando Venda"});
}

export const updateVenda: RequestHandler = (req, res) => {
    res.status(200).json({text: "Atualizando Venda"});
}

export const deleteVenda: RequestHandler = (req, res) => {
    res.status(200).json({text: "Deletando Venda"});
}

export default{
    getVendas,
    saveVenda,
    updateVenda,
    deleteVenda
}
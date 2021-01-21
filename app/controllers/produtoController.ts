import { RequestHandler } from "express";


export const getProdutos: RequestHandler = (req, res) => {
    res.status(200).json({text: "Retornando Lista de produtos"});
}

export const saveProduto: RequestHandler = (req, res) => {
    res.status(200).json({text: "Salvando produto"});
}

export const updateProduto: RequestHandler = (req, res) => {
    res.status(200).json({text: "Atualizando produto"});
}

export const deleteProduto: RequestHandler = (req, res) => {
    res.status(200).json({text: "Deletando produto"});
}

export default{
    getProdutos,
    saveProduto,
    updateProduto,
    deleteProduto
}
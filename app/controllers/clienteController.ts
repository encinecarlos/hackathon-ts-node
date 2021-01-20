import { RequestHandler } from "express";


export const getClientes: RequestHandler = (req, res) => {
    res.status(200).json({text: "Retornando Lista de Cliente"});
}

export const saveCliente: RequestHandler = (req, res) => {
    res.status(200).json({text: "Salvando Cliente"});
}

export const updateCliente: RequestHandler = (req, res) => {
    res.status(200).json({text: "Atualizando Cliente"});
}

export const deleteCliente: RequestHandler = (req, res) => {
    res.status(200).json({text: "Deletando Cliente"});
}

export default{
    getClientes,
    saveCliente,
    updateCliente,
    deleteCliente
}
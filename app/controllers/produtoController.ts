import { RequestHandler } from "express";


export const getProdutos: RequestHandler = (req, res) => {
    res.status(200).json({});
}

export default{
    getProdutos
}
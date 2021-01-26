import { RequestHandler } from "express";
const db = require("../config/db");


export const getVendasProdutos: RequestHandler = (req, res) => {
    db("vendas_produtos")
    .then((vendas:any) => res.status(200).json(vendas))
    .catch((err: any) => res.status(500).json(err));
}



export default {
    getVendasProdutos
}
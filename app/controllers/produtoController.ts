import { RequestHandler } from "express";
const db = require("../config/db");

export type ProdutoProps = {
  id: number
  nome: string
  descricao: string
  categoria: string
  preco: number
  quantidade: number 
}

export const getProdutos: RequestHandler = (req, res) => {
  db("produtos")
    .then((produtos: ProdutoProps) => res.status(200).json(produtos))
    .catch((err: any) => res.status(500).json(err));
};

export const getById: RequestHandler = (req, res) => {
  db("produtos")
    .where({ id: req.params.id })
    .then((produto: ProdutoProps) => res.status(200).json(produto))
    .catch((err: any) => res.status(500).json(err));
};

export const saveProduto: RequestHandler = (req, res) => {
  db("produtos")
    .insert(req.body)
    .then((data: ProdutoProps) => res.status(201).json(data))
    .catch((err: any) => res.status(500).json(err));
};

export const updateProduto: RequestHandler = (req, res) => {
  db("produtos")
    .update(req.body)
    .where({ id: req.params.id })
    .then(() => res.status(204).json())
    .catch((err: any) => res.status(500).json(err));
};

export const deleteProduto: RequestHandler = (req, res) => {
  db("produtos")
    .where({ id: req.params.id })
    .del()
    .then(() =>
      res
        .status(200)
        .json({ status: 200, messaghe: "Produto removido com sucesso" })
    )
    .catch((err: any) => res.status(500).json(err));
};

export default {
  getProdutos,
  getById,
  saveProduto,
  updateProduto,
  deleteProduto,
};

// module.exports = (app: any) => {
//   const getProducts: RequestHandler = (req, res) => {
//     app.db("users").then((users: any) => res.status(200).json(users));
//     //res.json({ message: "all ok" });
//   };

//   return { getProducts };
// };

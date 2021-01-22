import { RequestHandler } from "express";
const db = require("../config/db");

export const getProdutos: RequestHandler = (req, res) => {
  // res.status(200).json({ text: "Retornando Lista de produtos" });
  db("produtos")
    .then((produtos: any) => res.status(200).json(produtos))
    .catch((err: any) => res.status(500).json(err));
};

export const saveProduto: RequestHandler = (req, res) => {
  // res.status(200).json({ text: "Salvando produto" });
  db("produtos")
    .insert(req.body)
    .then((data: any) => res.status(201).json(data))
    .catch((err: any) => res.status(500).json(err));
};

export const updateProduto: RequestHandler = (req, res) => {
  // res.status(200).json({ text: "Atualizando produto" });
  db("produtos")
    .update(req.body)
    .where({ id: req.params.id })
    .then(() => res.status(204).json())
    .catch((err: any) => res.status(500).json(err));
};

export const deleteProduto: RequestHandler = (req, res) => {
  // res.status(200).json({ text: "removendo produto" });
  db("produtos")
    .where({ id: req.params.id })
    .then(() =>
      res
        .status(200)
        .json({ status: 200, messaghe: "Produto removido com sucesso" })
    )
    .catch((err: any) => res.status(500).json(err));
};

export default {
  getProdutos,
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

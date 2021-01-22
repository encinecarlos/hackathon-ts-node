import { RequestHandler } from "express";

// export const getProdutos: RequestHandler = (req, res) => {
//   res.status(200).json({ text: "Retornando Lista de produtos" });
// };

// export const saveProduto: RequestHandler = (req, res) => {
//   res.status(200).json({ text: "Salvando produto" });
// };

// export const updateProduto: RequestHandler = (req, res) => {
//   res.status(200).json({ text: "Atualizando produto" });
// };

// export const deleteProduto: RequestHandler = (req, res) => {
//   res.status(200).json({ text: "removendo produto" });
// };

// export default {
//   getProdutos,
//   saveProduto,
//   updateProduto,
//   deleteProduto,
// };
module.exports = (app: any) => {
  const getProducts: RequestHandler = (req, res) => {
    // app.db("users").then((users: any) => res.status(200).json(users));
    res.json({ message: "all ok" });
  };

  return { getProducts };
};

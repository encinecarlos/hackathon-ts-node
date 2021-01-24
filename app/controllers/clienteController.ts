import { RequestHandler } from "express";
const db = require("../config/db");

export type ClienteProps = {
  id: number
  nome: string
  cpf: string
  telefone: string
  email: string
}

export const getClientes: RequestHandler = (req, res) => {
  //   res.status(200).json({ text: "Retornando Lista de Cliente" });
  db("clientes")
    .then((clientes: ClienteProps) => res.status(200).json(clientes))
    .catch((err: any) => res.status(500).json(err));
};

export const getById: RequestHandler = (req, res) => {
  db("clientes")
    .where({ id: req.params.id })
    .then((cliente: ClienteProps) => res.status(200).json(cliente))
    .catch((err: any) => res.status(200).json(err.message));
};

export const saveCliente: RequestHandler = (req, res) => {
  db("clientes")
    .insert(req.body)
    .then((data: ClienteProps) => res.status(201).json(data))
    .catch((err: any) => res.status(200).json(err.message));
};

export const updateCliente: RequestHandler = (req, res) => {
  db("clientes")
    .update(req.body)
    .where({ id: req.params.id })
    .then(() => res.status(204).json())
    .catch((err: any) => res.status(500).json(err));
};

export const deleteCliente: RequestHandler = (req, res) => {
    db("clientes")
    .where({ id: req.params.id })
    .del()
    .then(() =>
      res
        .status(200)
        .json({ status: 200, messaghe: "Cliente removido com sucesso" })
    )
    .catch((err: any) => res.status(500).json(err));
};

export default {
  getClientes,
  getById,
  saveCliente,
  updateCliente,
  deleteCliente,
};

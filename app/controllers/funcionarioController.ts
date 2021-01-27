import { RequestHandler } from "express";
const db = require("../config/db");

export type FuncionarioProps = {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  funcionario_id: number;
};

export const getFuncionarios: RequestHandler = (req, res) => {
  db("funcionarios")
    .then((funcionario: FuncionarioProps) => res.status(200).json(funcionario))
    .catch((err: any) => res.status(500).json(err));
};

export const getById: RequestHandler = (req, res) => {
  db("funcionarios")
    .where({ id: req.params.id })
    .then((funcionario: FuncionarioProps) => res.status(200).json(funcionario))
    .catch((err: any) => res.status(200).json(err.message));
};

export const saveFuncionario: RequestHandler = async (req, res) => {
  db("funcionarios")
    .insert(req.body)
    .then((data: FuncionarioProps) => res.status(201).json(data))
    .catch((err: any) => res.status(200).json(err.message));
};

export const updateFuncionario: RequestHandler = (req, res) => {
  db("funcionarios")
    .update(req.body)
    .where({ id: req.params.id })
    .then(() => res.status(204).json())
    .catch((err: any) => res.status(500).json(err));
};

export const deleteFuncionario: RequestHandler = (req, res) => {
  db("funcionarios")
    .where({ id: req.params.id })
    .del()
    .then(() =>
      res
        .status(200)
        .json({ status: 200, message: "Funcionario removido com sucesso" })
    )
    .catch((err: any) => res.status(500).json(err));
};

export default {
  getFuncionarios,
  getById,
  saveFuncionario,
  updateFuncionario,
  deleteFuncionario,
};

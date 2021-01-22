import express from "express";
const db = require("./config/db");

const consign = require("consign");
const app = express();

// app.db = db;
app.use(db);
app.use(express.json());

consign().include("./controllers").then("./config/routes.ts").into(app);

app.listen(3000, () => console.log("Servidor Rodando"));

// const express = require("express");
// const db = require("./config/db");
// const consign = require("consign");
// const app = express();

// app.db = db;

// app.use(express.json());

// consign().include("./config/routes.ts").then("./api").into(app);

// app.listen(3200, () => console.log("Servidor Rodando"));
import express from "express";
import connection from "./config/db";
const consign = require("consign");

const app = express();

/* @ts-ignore */
app.use(connection);

consign().include("./controllers").then("./config/routes.ts").into(app);

app.listen(3000, () => console.log("server running!"));

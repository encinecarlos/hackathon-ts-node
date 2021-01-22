import express from "express";
// const db = require("./config/db");

const consign = require("consign");
const app = express();
const port = process.env.PORT || 3000;

// app.db = db;
// app.use(db);
app.use(express.json());

consign().include("./controllers").then("./config/routes.ts").into(app);

app.listen(port, () => console.log(`Running on port ${port}`));

require("dotenv").config();
import express from "express";
const cors = require("cors");

const consign = require("consign");
const app = express();
const port = process.env.PORT || 3000;

const options = {
  origin: "*",
  methods: ["GET", "PUT", "POST"],
};

// app.db = db;
app.use(cors(options));
app.use(express.json());

consign().include("./controllers").then("./config/routes.ts").into(app);

app.listen(port, () => console.log(`Running on port ${port}`));

// const config = require("../knexfile");
// const knex = require("knex")(config);

// knex.migrate.latest([config]);

// module.exports = knex;
import knex from "knex";
import config from "../knexfile";

const connection = knex(config);

export default connection;

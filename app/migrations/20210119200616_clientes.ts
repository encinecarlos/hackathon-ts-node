import Knex from "knex";
exports.up = function (knex: Knex) {
  return knex.schema.createTable("clientes", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("cpf").notNullable();
    table.string("telefone").notNullable();
    table.string("email").notNullable();
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable("clientes");
};

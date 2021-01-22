import Knex from "knex";
exports.up = function (knex: Knex) {
  return knex.schema.createTable("produtos", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("descricao");
    table.string("categoria").notNullable();
    table.decimal("preco").notNullable();
    table.integer("quantidade").notNullable();
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable("produtos");
};

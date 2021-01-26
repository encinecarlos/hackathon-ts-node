import Knex from "knex";
exports.up = function (knex: Knex) {
  return knex.schema.createTable("vendas_produtos", (table) => {
    table.increments("id").primary();
    table.integer("vendas_id").notNullable().unsigned();
    table.integer("produto_id").notNullable().unsigned();
    table.integer("quantidade_produto").notNullable();
    table.foreign("vendas_id").references("id").inTable("vendas");
    table.foreign("produto_id").references("id").inTable("produtos");
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable("vendas_produtos");
};

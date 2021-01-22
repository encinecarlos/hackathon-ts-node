import Knex from "knex";
exports.up = function (knex: Knex) {
  return knex.schema.createTable("vendas", (table) => {
    table.increments("id").primary();
    table.integer("quantidade").notNullable();
    table.decimal("total_price", 8, 2).notNullable();
    table.string("vendedor"); // informar o nome do vendedor
    table.integer("celiente_id").notNullable().unsigned();
    table.foreign("celiente_id").references("id").inTable("clientes");
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable("vendas");
};

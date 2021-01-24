import Knex from "knex";
exports.up = function (knex: Knex) {
  return knex.schema.createTable("vendas", (table) => {
    table.increments("id").primary();
    table.integer("quantidade").notNullable();
    table.decimal("total_price", 8, 2).notNullable();
    table.string("vendedor"); // informar o nome do vendedor
    table.integer("cliente_id").notNullable().unsigned();
    table.foreign("cliente_id").references("id").inTable("clientes");
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable("vendas");
};

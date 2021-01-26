import Knex from "knex";
exports.up = function (knex: Knex) {
  return knex.schema.createTable("funcionarios", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("telefone");
    table.integer("funcionario_id").notNullable().unsigned();
    table.foreign("funcionario_id").references("id").inTable("vendas");
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable("funcionarios");
};

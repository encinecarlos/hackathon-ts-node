exports.up = function(knex) {
  return knex.schema.createTable('vendas_produtos', table => {
      table.increments('id').primary()
      table.integer('fk_vendas').notNull()
      table.integer('fk_produto').notNull()
      table.foreign('fk_vendas').references('id').inTable('vendas')
      table.foreign('fk_produto').references('id').inTable('produtos')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('vendas_produtos')
};

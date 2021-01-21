exports.up = function(knex) {
  return knex.schema.createTable('produtos', table => {
      table.increments('id').primary()
      table.string('nome').notNull()
      table.string('descricao')
      table.string('categoria').notNull()
      table.decimal('preco').notNull()
      table.integer('quantidade').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos')
};

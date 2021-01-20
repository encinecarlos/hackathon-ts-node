exports.up = function(knex) {
  return knex.schema.createTable('vendas', table => {
      table.increments('id').primary()
      table.string('produto').notNull()
      table.integer('quantidade').notNull()
      table.string('vendedor_id').notNull()      
      table.integer('fk_cliente').notNull().unsigned()
      table.foreign('fk_cliente').references('id').inTable('clientes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('vendas')
};

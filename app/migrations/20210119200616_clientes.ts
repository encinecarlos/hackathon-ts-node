exports.up = function(knex) {
  return knex.schema.createTable('clientes', table => {
      table.increments('id').primary()
      table.string('nome').notNull()
      table.string('cpf').notNull()
      table.string('telefone').notNull()
      table.string('email').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clientes')
};

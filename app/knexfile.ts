// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'ecommerce_api',
    user: 'ecommerce_api',
    password: 'ecommerce_api'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

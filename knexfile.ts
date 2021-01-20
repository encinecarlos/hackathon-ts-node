// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'ecommerce_api',
    user: 'root',
    password: 'ecommerce-api'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

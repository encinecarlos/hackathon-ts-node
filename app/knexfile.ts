// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    host: "ecommerce-db",
    database: "ecommerce_api",
    user: "ecommerce-api",
    password: "api-commerce",
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

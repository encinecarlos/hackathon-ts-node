// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    host: "ecommerce-db",
    database: "db-api",
    user: "api",
    password: "api",
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

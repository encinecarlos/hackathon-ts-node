// Update with your config settings.

const config = {
  client: "mysql",
  connection: {
    database: "ecommerce_api",
    user: "root",
    password: "ecommerce-api",
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

export default config;

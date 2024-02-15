/**
 * @type { Object.<string, import("knex").Knex.Config> }
 *
 */
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.POSTGRES_URL,
    migrations: {
      directory: "./db/migrations",
    },
  },
};

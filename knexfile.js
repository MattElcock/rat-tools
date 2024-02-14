/**
 * @type { Object.<string, import("knex").Knex.Config> }
 *
 */
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DATABASE_URI,
    migrations: {
      directory: "./db/migrations",
    },
  },
};

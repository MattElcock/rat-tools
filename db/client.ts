const pg = require("knex")({
  client: "pg",
  connection: process.env.POSTGRES_URL,
});

export default pg;

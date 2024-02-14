async function up(knex) {
  return knex.schema
    .createTable("groups", function (table) {
      table.uuid("id", { primaryKey: true }).notNullable();
    })
    .createTable("pets", function (table) {
      table.uuid("id", { primaryKey: true }).notNullable();
      table.uuid("group_id").references("id").inTable("groups").notNullable();
      table.string("name").notNullable();
      table.date("date_of_birth").notNullable();
      table.specificType("fur", "TEXT[]").notNullable();
      table.specificType("species", "TEXT[]").notNullable();
    })
    .createTable("weights", function (table) {
      table.uuid("id", { primaryKey: true }).notNullable();
      table.uuid("pet_id").references("id").inTable("pets").notNullable();
      table.date("date_taken").notNullable();
      table.integer("value").notNullable();
      table.string("metric").notNullable();
    });
}

async function down(knex) {
  return knex.schema.dropTableIfExists("pets").dropTableIfExists("groups");
}

module.exports = {
  up: up,
  down: down,
};

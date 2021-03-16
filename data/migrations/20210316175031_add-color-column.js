
exports.up = function(knex) {
  return knex.schema.table('fruits', table => {
    table.string('color', 128).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.table('fruits', table => {
    table.dropColumn('color')
  })
};

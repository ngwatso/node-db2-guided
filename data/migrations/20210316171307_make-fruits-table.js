exports.up = function (knex) {
  return knex.schema
    .createTable('fruits', table => {
      table.increments('fruit_id')
      table.
    })
  // .createTable('users', table => {

  // })
};

exports.down = function (knex) {
  return knex.schema
    // .dropTableIfExists('users')
    .dropTableIfExists('fruits')
};

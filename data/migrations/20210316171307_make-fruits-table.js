exports.up = function (knex) {
  return knex.schema
    .createTable('fruits', table => {
      ta
    })
  // .createTable('users', table => {

  // })
};

exports.down = function (knex) {
  return knex.schema
    // .dropTableIfExists('users')
    .dropTableIfExists('fruits')
};

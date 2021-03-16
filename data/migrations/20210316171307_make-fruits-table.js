exports.up = function (knex) {
  return knex.schema
    .createTable('fruits', table => {
      table.increments('fruit_id')
      table.text('name').unique().notNullable()
      table.decimal('weight_oz').notNullable()
      table.boolean('is_delicious').defaultTo(false)
    })
  // .createTable('users', table => {

  // })
};

exports.down = function (knex) {
  return knex.schema
    // .dropTableIfExists('users')
    .dropTableIfExists('fruits')
};

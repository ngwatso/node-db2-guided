
exports.up = function(knex) {
  return knex.schema.table('fruits', table => {
    table.string('')
  })
};

exports.down = function(knex) {

};

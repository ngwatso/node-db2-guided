
exports.seed = function(knex) {
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        {name: 'pear', weight_oz: 2.5, delicious: 0, color: 'red'},
        {name: 'banana', weight_oz: 1.5, delicious: 1},
        {name: 'apple', weight_oz: 0.5 },
      ]);
    });
};

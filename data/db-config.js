const knex = require('knex');
const config = require('../knexfile');

const activeConfig = 'development';
const configuredKnex = knex(config[activeConfig]);

module.exports = configuredKnex;

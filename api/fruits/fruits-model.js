const db = require('../../data/db-config');

function get() {
	return db('fruits');
}

function getById(id) {
	return db('fruits').first('*').where({ id });
}

async function create(newFruit) {
	const ids = await db('fruits').insert(newFruit);
	return getById(ids[0]);
}

module.exports = {
	get,
	getById,
	create,
};

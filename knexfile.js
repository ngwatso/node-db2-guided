// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/produce.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
};

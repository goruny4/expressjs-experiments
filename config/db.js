// db setup
var knex = require('knex')({
	client: 'pg',
	connection: {
		host: 'localhost',
		user: 'zandr',
		password: '',
		database: 'hapi_test',
		charset: 'utf8'
	},
	pool: {
		min: 1,
		max: 10
	}
});

var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;

var bookshelf = require('../config/db').bookshelf;

var User = bookshelf.Model.extend({
	tableName: 'people'
});

module.exports.User = User;

// module.exports = {
// 	User : User,
// 	bookshelf : bookshelf
// };

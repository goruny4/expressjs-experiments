var index = require('./routes/index')
var login = require('./routes/login')
var logout = require('./routes/logout')
var profile = require('./routes/profile')
var data = require('./routes/data')


module.exports = function (app) {
	app.use('/', index);
	app.use('/login', login);
	app.use('/logout', logout);
	app.use('/profile', profile);
	app.use('/data', data);
	app.use(function(req, res, next) {
		res.status(404).send('404, Sorry cant find that !');
	});
};

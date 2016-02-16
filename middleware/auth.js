var userlist = require('../middleware/usersdb');

module.exports.checkLoginPassword = function() {
	return function(req, res, next) {
		if (req.body.user === userlist.email && req.body.password === userlist.password)
		{
			next();
		}
		else {
			res.redirect('/');
			console.log('User rejected');
		};
	};
};

module.exports.checkLoginState = function() {
	return function(req, res, next) {
		if (req.session.login_state === true)
		{
			next();
		}
		else {
			res.redirect('login');
		};
	};
};

var express = require('express');
var router = express.Router();
var userlist = require('../middleware/usersdb');
var auth = require('../middleware/auth');


router.route('/')
		.get(auth.checkLoginState(), function (req, res) {
			res.render('profile', {name : userlist.name});
		});

module.exports = router;

var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');

router.route('/')
		.get(function (req, res) {
			res.render('login')
		})
		.post(auth.checkLoginPassword(), function (req, res) {
			req.session.login_state = true;
			res.redirect('profile');
			console.log('User accepted');
		});

module.exports = router;

var express = require('express');
var router = express.Router();

router.route('/')
		.get(function (req, res) {
			req.session.login_state = false;
			res.redirect('/');
		});

module.exports = router;

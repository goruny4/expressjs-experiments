var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

router.route('/')
		.get(function (req, res) {
			new User().fetch({'name' : 'Jon'})
				.then(function(model) {
					res.send(model.serialize());
					// res.send(model.get('name'));
				})
				.catch(function(error) {
					console.log(error);
					res.send('An error occured');
				});
		});

module.exports = router;

var express	= require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var jade = require('jade');

// app instance
var app = express();

app.use(session({
	secret: 'nk5eTqgmNTvybrUBq4JZZzFj8qTzRENbDDWz2ufksUuJDkPa',
	name: 'session_id_client',
	saveUninitialized: true,
	resave: true,
	cookie: {
		path: '/',
		httpOnly: true,
		maxAge: 1000 * 60 * 60 * 24
	}
	// store:
}));

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

//router init
require('./router')(app);

// start app
app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});

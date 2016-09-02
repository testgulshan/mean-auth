var express         = require('express');
var app             = express();
var port            = process.env.PORT || 8000;
var mongoose        = require('mongoose');
var methodOverride  = require('method-override');
var passport        = require('passport');
var flash           = require('connect-flash')
var morgan          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var session         = require('express-session');


// CONFIGURATION ==============================================================
var configDB      =  require('./config/db');
mongoose.connect(configDB.url); // connect to our database


// SETUP EXPRESS APPLICATION ==================================================
app.use(morgan('dev'))
app.use(methodOverride());
app.use(cookieParser())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));


// PASSPORT ===================================================================
// required for passport
app.use(session({ secret: 'meanauthenticationproject' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./config/passport')(passport); // pass passport for configuration


// ROUTING ====================================================================
var User = require('./app/models/user');
require('./app/routes')(app, passport);

app.listen(port)
console.log('server is running on ' + port);

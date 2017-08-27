var express = require('express');
var RouteController = require('./router/routes');

var cookieParser = require('cookie-parser');
var session =  require('express-session');
var passport = require('passport');


var app = express();

app.use(cookieParser());
app.use(express.static('./public'));
app.set('view engine','ejs');
app.use(session({secret : "anything"}));

var passportCtrl = require('./passport/main');
passportCtrl(passport,app);


//Routes
RouteController(app);

app.listen(3000);
console.log("Server Running");
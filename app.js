var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var port = 3000;

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//express session middleware
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//express validator middleware


//connect flash middleware
app.use(flash());
app.use(function(req,res,next){
    res.locals.messages = require('express-messages')(req,res);
    next();
});




app.get('/',function(req,res){
    res.render('index');
});

app.get('/store',function(req,res){
    res.render('store');
});

app.get('/story',function(req,res){
    res.render('story');
});

app.get('/team',function(req,res){
    res.render('team');
});

app.get('/media',function(req,res){
    res.render('media');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/login',function(req,res){
    res.render('login');
});

app.get('/register',function(req,res){
    res.render('register');
});

app.listen(port);
console.log('Server started on port ' + port);

module.exports = app;
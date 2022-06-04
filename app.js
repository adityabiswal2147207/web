var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var pug = require('pug');


var port = 3000;

var app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.join(__dirname,'public')));

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

app.listen(port);
console.log('Server started on port ' + port);

module.exports = app;
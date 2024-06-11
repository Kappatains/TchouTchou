var express = require('express');
var path = require('path');
var app = express();

const { default: mongoose } = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/TchouTchou');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//router
var usersRouter = require('./routes/users');
var gareRouter = require('./routes/gare');
var cityRouter = require('./routes/city');
var lineRouter = require('./routes/line');
app.use(express.json());
// use JWT auth to secure the api 
//La ligne ci dessous est commenté pour éviter à devoir récup le token en header pour les requêtes d'insertions.
//app.use(jwt());
app.use('/users', usersRouter);
app.use('/gare', gareRouter);
app.use('/city', cityRouter);
app.use('/line', lineRouter);




module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var musicRouter = require('./routes/music');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var music = require("./models/music");
var resourceRouter = require("./routes/resource");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
app.use(express.static(path.join(__dirname, 'public')));


require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/music', musicRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed onserver start
// async function recreateDB(){
// // Delete everything
// await music.deleteMany();
// let instance1 = new
// music({name:"Classical", No_of_songs :5, type:"Melody"});
// instance1.save().then(doc=>{
// console.log("First object saved")}
// ).catch(err=>{
// console.error(err)
// });

// let instance2 = new
// music({name:"Folk", No_of_songs :15, type:"Pitch"});
// instance2.save().then(doc=>{
// console.log("Second object saved")}
// ).catch(err=>{
// console.error(err)
// });

// let instance3 = new
// music({name:"Western",No_of_songs :25, type:"Rap"});
// instance3.save().then(doc=>{
// console.log("Third object saved")}
// ).catch(err=>{
// console.error(err)
// });

// }
// let reseed = true;
// if (reseed) {recreateDB();}


module.exports = app;
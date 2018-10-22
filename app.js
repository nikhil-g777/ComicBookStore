'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var bookRouter = require('./server/book/book.route');
var authorRouter = require('./server/author/author.route');
var userRouter = require('./server/user/user.route');
var categoryRouter = require('./server/category/category.route');

var app = express();

//getting credentials
var credentails = require('./credentials.json');
//Connecting to MongoDB
mongoose.connect('mongodb://' + credentails.mlab.user + ':' + credentails.mlab.password + '@' + credentails.mlab.path);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/authors', authorRouter);
app.use('/categories', categoryRouter);

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

var port = 3000;
app.listen(port, function() {
  console.log('Server Listening on port : ' + port);
});

module.exports = app;

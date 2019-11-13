var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerDoc = require('./config/swagger/swaggerDoc');
require('./config/mongodb/db');
require('dotenv').config();

var indexRouter = require('./src/routes/index');

var app = express();
app.use('/public', express.static('public'))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Swagger
swaggerDoc(app);

//Route
app.use('/api/v1', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(error, req, res, next) {
  console.log(error);
  res.status(error.status || 500).json({
    error: true,
    errors: [{
      apiCode: 500,
      message: error.message
    }
    ],
    data: null
  });
});

module.exports = app;

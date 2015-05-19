'use strict';

var path = require('path');

var conf = require('./index.js');
var FRONT_END_PATH = path.join(conf.ROOT_PATH, 'frontend');

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function (app) {
  app.set('port', conf.port);

  app.use(express.static(path.join(FRONT_END_PATH, 'app')));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(logErrors);
  app.use(errorHandler);
};

function logErrors(err, req, res, next) {
  console.error(err.stack);
}

function errorHandler(err, req, res, next) {
  res
    .status(err.status || 500)
    .json({
      err: err.message
    });
}

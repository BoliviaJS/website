'use strict';

var conf = require('./backend/configuration');

var BACKEND_MODULES_PATH = conf.BACKEND_MODULES_PATH;

var blogRouter = require(BACKEND_MODULES_PATH + '/blog/router');
var eventRouter = require(BACKEND_MODULES_PATH + '/event/router');
var userRouter = require(BACKEND_MODULES_PATH + '/user/router');

module.exports = function (app) {
  app.use('/blog', blogRouter);
  app.use('/users', userRouter);
  app.use('/api/events', eventRouter);
};

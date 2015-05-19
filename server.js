'use strict';

var app = require('express')();

module.exports = {
  configure: configureServer,
  setRoutes: setRoutes,
  start: startServer
};

function configureServer() {
  console.log('Configuring server..');
  require('./backend/configuration/express.js')(app);
}

function setRoutes() {
  console.log('Setting routes..');
  require('./routes')(app);
}

function startServer() {
  console.log('Starting the server...');
  app.listen(app.get('port'), function() {
    console.log('So now the server is ready and up at %d :)', app.get('port'));
  });
}
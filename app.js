var server = require('./server');

server.configure();

server.setRoutes();

server.start();
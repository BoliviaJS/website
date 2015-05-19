'use strict';
var path = require('path');
var ROOT_PATH = path.join(__dirname, '../../');
var BACKEND_MODULES_PATH = path.join(ROOT_PATH, '/backend/modules');

module.exports = {
  ROOT_PATH: ROOT_PATH,
  BACKEND_MODULES_PATH: BACKEND_MODULES_PATH,

  port: process.env.port || 3000,

  database: {
    url: ''
  }
};
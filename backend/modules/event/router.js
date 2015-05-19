'use strict';

var router = require('express').Router();

router.get('/', function (req, res, next) {
  res.json({
    estudiantes: {
      nombre: 'rene', 
      apellido:'Polo'
    }
  });
});

module.exports = router;
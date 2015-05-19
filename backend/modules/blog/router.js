'use strict';

var router = require('express').Router();

router.get('/', function (req, res, next) {
  res.send('Aqui deberian aparecer los blogposts');
});

module.exports = router;

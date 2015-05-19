'use strict';

var router = require('express').Router();

router.get('/signup', function signup(req, res, next) {
  res.send('Sign Up');
});

module.exports = router;
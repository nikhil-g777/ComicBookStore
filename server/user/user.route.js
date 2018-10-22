'use strict';

var express = require('express');
var router = express.Router();

var userController = require('./user.controller');

router.route('/')
    .get(userController.userList)
    .post(userController.createUser);
module.exports = router;

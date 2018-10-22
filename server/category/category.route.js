'use strict';

var express = require('express');
var router = express.Router();

var categoryController = require('./category.controller');

router.route('/')
    .get(categoryController.categoryList)
    .post(categoryController.createCategory);
module.exports = router;

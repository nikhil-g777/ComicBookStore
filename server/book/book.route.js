'use strict';

var express = require('express');
var router = express.Router();

var bookController = require('./book.controller');

router.route('/')
    .get(bookController.bookList)
    .post(bookController.createBook);

router.route('/rent')
    .post(bookController.rentBook);

router.route('/return')
    .post(bookController.returnBook);

module.exports = router;

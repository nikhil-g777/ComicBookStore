'use strict';

var express = require('express');
var router = express.Router();

var authorController = require('./author.controller');

/* GET list of books. */
router.route('/')
    .get(authorController.authorList)
    .post(authorController.createAuthor);
module.exports = router;

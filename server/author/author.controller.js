'use strict';

var Author = require('./author.model');

exports.authorList = function(req, res, next) {
  Author.find({}, function(err, docs) {
    if (err) {
      res.send(err);
    } else {
      res.send({list: docs});
    }
  });
};

exports.createAuthor = function(req, res, next) {
  Author.create(req.body, function(err, createdAuthor) {
    if (err) {
      res.send(err);
    } else {
      res.send(createdAuthor);
    }
  });
};


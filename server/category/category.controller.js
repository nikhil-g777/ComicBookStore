'use strict';

var Category = require('./category.model');

exports.categoryList = function(req, res, next) {
  Category.find({}, function(err, docs) {
    if (err) {
      res.send(err);
    } else {
      res.send({list: docs});
    }
  });
};

exports.createCategory = function(req, res, next) {
  Category.create(req.body, function(err, createdCategory) {
    if (err) {
      res.send(err);
    } else {
      res.send(createdCategory);
    }
  });
};


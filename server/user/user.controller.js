'use strict';

var User = require('./user.model');

exports.userList = function(req, res, next) {
  User.find({}, function(err, docs) {
    if (err) {
      res.send(err);
    } else {
      res.send({list: docs});
    }
  });
};

exports.createUser = function(req, res, next) {
  User.create(req.body, function(err, createdUser) {
    if (err) {
      res.send(err);
    } else {
      res.send(createdUser);
    }
  });
};


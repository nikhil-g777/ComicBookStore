'use strict';

var Book = require('./book.model');

exports.bookList = function(req, res, next) {
  Book.find({}, function(err, docs) {
    if (err) {
      res.send(err);
    } else {
      res.send({list: docs});
    }
  });
};

exports.createBook = function(req, res, next) {
  Book.create(req.body, function(err, createdBook) {
    if (err) {
      res.send(err);
    } else {
      res.send(createdBook);
    }
  });
};

exports.rentBook = function(req, res, next) {
  Book.findById(req.body.bookId, function(err, book) {
    if (err) {
      res.send(err);
    } else if (book) {
      if (book.status == 'Available') {
        book.status = 'Rented';
        book.rentedBy = req.body.userId;
        book.save(function(err, updatedBook) {
          res.send({success: true, book: updatedBook});
        });
      } else {
        res.send({success: false, message: 'The book is currently not available'});
      }
    } else {
      res.status(404).json({name: 'NotFound', message: 'Book Id is invalid'});
    }
  });
};

exports.returnBook = function(req, res, next) {
  Book.findById(req.body.bookId, function(err, book) {
    if (err) {
      res.send(err);
    } else if (book) {
      book.status = 'Available';
      book.rentedBy = null;
      book.save(function(err, updatedBook) {
        res.send({success: true, book: updatedBook});
      });
    } else {
      res.status(404).json({name: 'NotFound', message: 'Book Id is invalid'});
    }
  });
};

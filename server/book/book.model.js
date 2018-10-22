'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var BookSchema = new Schema({
  title: String,
  description: String,
  status: {type: String, enum: ['Available', 'Rented', 'Not Available'], default: 'Available', required: true},
  authorId: {type: ObjectId, required: true},
  rentedBy: ObjectId,
});

module.exports = mongoose.model('Book', BookSchema);

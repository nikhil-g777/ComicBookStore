'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AuthorSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
});

module.exports = mongoose.model('Author', AuthorSchema);

'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CategorySchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
});

module.exports = mongoose.model('Category', CategorySchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FishSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: false
  },
  isFreshwater: {
    type: Boolean,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  paragraphs: {
    type: [String],
    required: false
  }
});

module.exports = mongoose.model('Fishes', FishSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  isVaccinated: {
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

module.exports = mongoose.model('Cats', CatSchema);

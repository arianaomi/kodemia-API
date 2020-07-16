//
const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2,
  },
  age: {
    type: Number,
    min: 15,
    max: 100,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'famale', 'nonbinnary'],
  },
  mail: {
    type: String,
    required: true,
    maxlength: 100,
  },
})

module.exports = mongoose.model('mentors', mentorSchema)
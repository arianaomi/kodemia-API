//
const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    uppercase: true,
  },
  date: {
    type: Date, // ! "2020-07-22T05:00:00.000+00:00"
  },
  description: {
    type: String,
    trim: true, //* Elimina espacios al inicio y al final
  },
  mentor: {
    type: mongoose.Types.ObjectId,
    ref: 'mentors',
  },
})

module.exports = mongoose.model('class', classSchema)

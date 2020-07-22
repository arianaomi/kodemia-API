//
const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    uppercase: true,
  },
  date: {
    type: {
      type: Date,
      required: true,
    },
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

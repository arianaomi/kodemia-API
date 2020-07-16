//MODELS
const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
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
})

//coleccion de la base de datos, sino existe la crea
module.exports = mongoose.model('koders', koderSchema)

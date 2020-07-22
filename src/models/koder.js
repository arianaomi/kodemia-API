//MODELS
const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
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
    enum: ['male', 'famale', 'nonbinary'],
  },
  email: {
    type: String,
    required: true,
    match: /^.+@.+\..+$/ /*regex:  . match con cualquier caracter ,{} modificador de frecuencia, + de uno en adelante */,
  },
  password: {
    type: String,
    required: true,
    min: 1,
  },
})

//coleccion de la base de datos, sino existe la crea
module.exports = mongoose.model('koders', koderSchema)

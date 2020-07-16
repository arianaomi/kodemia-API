//función que me va a servir para conectarme a la base de datos

const mongoose = require('mongoose')

module.exports = () =>
  mongoose.connect(
    'mongodb+srv://arianaomi:arianaomi@kodemia-c.7peye.mongodb.net/kodemia',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } //sin cb nos regresa una promesa, si lo ponemos ya no nos regresa una promesa
  )

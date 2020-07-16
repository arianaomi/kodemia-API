//función que me va a servir para conectarme a la base de datos

const mongoose = require('mongoose')


const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const CONN_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@kodemia-c.7peye.mongodb.net/${DB_NAME}`

module.exports = () =>
  mongoose.connect(
    CONN_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } //sin cb nos regresa una promesa, si lo ponemos ya no nos regresa una promesa
  )

// este archivo es la definición del servidor

const express = require('express')

const app = express()

const kodersRouter = require('./routes/koders')

app.use(express.json())
//montando el router de koders con use
//segundo use de use 1.middleware 2.montar
app.use('/koders', kodersRouter)

app.get('/', (requeste, response) => {
  response.json({ success: true, message: 'kodemia APIv8' })
})


module.exports = app

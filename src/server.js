// este archivo es la definición del servidor
const express = require('express')
const app = express()

const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const classRouter = require('./routes/classes')
const authRouter = require('./routes/auth')

const cors = require('cors')
const wichMethod = require('./middlewares/method')

//MIDDLEWARE  a nivel de applicaciones
app.use(cors())
app.use(express.json())
app.use(wichMethod)

//* Usos de use:  1.middleware 2.montar routers

//MONTANDO ROUTERS
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/classes', classRouter)
app.use('/auth', authRouter)

app.get('/', (request, response) => {
  response.json({ success: true, message: 'kodemia APIv8' })
  console.log(request.method)
})

module.exports = app

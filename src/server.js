// este archivo es la definición del servidor

const express = require('express')

const app = express()

const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')


app.use(express.json())

//MIDDLEWARE  a nivel de applicaciones
//app.use(function(req,res,next)
//app.use(... funcion) recibe una o más funciones las vamos separando por comas

/*app.use(
  (request, response, next) => {
    console.log('middleware de aplicacion')
    next()
  },
  (request, response, next) => {
    console.log('middleware 2')
    request.naomi = 'hola soy naomi'
    next()
  },
  (request, response, next) => {
    console.log('middleware 3:', request.naomi)

    next()
  }
)
*/

//* Usos de use:  1.middleware 2.montar routers 
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)

app.get('/', (requeste, response) => {
  response.json({ success: true, message: 'kodemia APIv8' })
})

module.exports = app

//
const jwt = require('../lib/jwt')
const Koder = require('../models/koder')
//* si tienen o no para hacer llamadas a nuestra API, los koders que ya tienen un token
async function auth(request, response, next) {
  //Todas las llamadas deberian tener un header Authotization con un token valido 1-tener el header 2-token valido
  try {
    const { authorization } = request.headers
    console.log('auth:', authorization)
    const decodedToken = jwt.verify(authorization)
      console.log('decoded Token: ', decodedToken)
      const koder = await Koder.findById(decodedToken.id)
      request.koder = koder
    next()
  } catch (error) {
    response.json({
      success: false,
      error: 'No token provided',
    })
  }
}
module.exports = auth

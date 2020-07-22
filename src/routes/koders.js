const express = require('express')

const router = express.Router()

const koders = require('../usecases/koders')
const auth = require('../middlewares/auth')
const koder = require('../models/koder')

//middleware nivel router
/* router.use(
  (request, response, next) => {
    console.log('middleware router koders: ', request.naomi)
    next()
  },
  (request, response, next) => {
    console.log('-----------')
    next()
  }
) */

// router es un conjunto o subconjuntos de rutas, funciona básicamente como lo hace app

router.get(
  '/',
  (response, require, next) => {
    console.log('middleware de endpoint GET koder')
    next()
  },
  async (request, response) => {
    try {
      const allKoders = await koders.getAll()
      response.json({
        success: true,
        data: allKoders,
      })
    } catch (error) {
      response.status(400)
      response.json({
        success: false,
        error: error.message,
      })
    }
  }
)
// ! path, middleware, handler
router.post('/', auth, async (request, response) => {
  try {
    // console.log('koders', request.koder)
    const newKodersData = request.body

    const newKoder = await koders.create(newKodersData)

    response.json({
      success: true,
      data: newKoder,
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const id = request.params.id
    await koders.deleteById(id)

    response.json({
      success: true,
      message: 'Koder removed',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const newData = request.body
    await koders.updateById(id, newData)

    response.json({
      success: true,
      message: 'Updated Koder',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

module.exports = router

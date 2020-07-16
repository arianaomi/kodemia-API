const express = require('express')

const router = express.Router()

const koders = require('../usecases/koders')

//un router es un conjunto o subconjuntos de rutas
//funciona básicamente como lo hace app

router.get('/', async (request, response) => {
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
})

router.post('/', async (request, response) => {
  try {
    const newKodersData = request.body

    await koders.create(newKodersData)

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
    await koders.deleteKoder(id)

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
    await koders.update(id, newData)

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

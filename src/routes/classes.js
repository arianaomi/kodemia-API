//
const express = require('express')
const router = express.Router()
const classes = require('../usecases/class')

router.get('/', async (request, response) => {
  try {
    const allClasses = await classes.getAll()
    response.json({
      succes: true,
      data: allClasses,
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message,
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newClassData = request.body
    const newClass = await classes.create(newClassData)
    response.json({
      success: true,
      data: newClass,
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message,
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const id = request.params.id
    await classes.deleteById(id)

    response.json({
      success: true,
      message: 'Class removed',
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
    await classes.updateById(id, newData)

    response.json({
      success: true,
      message: 'Updated Class',
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

//
const express = require('express')

const router = express.Router()

const mentors = require('../usecases/mentors')

router.get('/', async (request, response) => {
  try {
    const allmentors = await mentors.getAll()
    response.json({
      success: true,
      data: allmentors,
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
    const newmentorsData = request.body

    const newMentor = await mentors.create(newmentorsData)

    response.json({
      success: true,
      data: newMentor,
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
    await mentors.deleteById(id)

    response.json({
      success: true,
      message: 'Mentor removed',
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
    await mentors.updateById(id, newData)

    response.json({
      success: true,
      message: 'Updated Mentor',
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

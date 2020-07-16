//
const Mentors = require('../models/mentor')


function getAll() {
  return Mentors.find()
}

function create(koderData) {
  return Mentors.create(koderData)
}

function deleteById(idKoder) {
  return Mentors.findByIdAndDelete(idKoder)
}

function updateById(idKoder, newData) {
  return Mentors.findByIdAndUpdate(idKoder, newData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
}

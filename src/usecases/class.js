//
const Class = require('../models/class')

function getAll() {
  return Class.find()
}

function create(classData) {
  return Class.create(classData)
}

function deleteById(idClass) {
  return Class.findByIdAndDelete(idClass)
}

function updateById(idClass, newData) {
  return Class.findByIdAndUpdate(idClass, newData)
}

async function getAssosiatedMentors(title) {
  const classByTitle = await Class.findOne({ title }).populate('mentor')
  console.log(classByTitle)
  const { name, age, mail } = classByTitle.mentor
  console.log(`Mentor que imaparte la clase: ${name}`)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  getAssosiatedMentors,
}

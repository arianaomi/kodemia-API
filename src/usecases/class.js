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

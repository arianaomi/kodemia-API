// funciones  (llamarlas como verbos)
//usecases: las acciones que el usuario puede ejercer en DB (CRUD)
const Koders = require('../models/koder') //ruta relativa

function getAll() {
  return Koders.find()
}

function create(koderData) {
  return Koders.create(koderData)
}

function deleteKoder(idKoder) {
  return Koders.findByIdAndDelete(idKoder)
}

function update(idKoder, newData) {
  return Koders.findByIdAndUpdate(idKoder, newData)
}

module.exports = {
  getAll,
  create,
  deleteKoder,
  update,
}

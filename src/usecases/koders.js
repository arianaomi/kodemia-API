//usecases: las acciones que el usuario puede hacer en DB (CRUD), funciones => como verbos

const Koders = require('../models/koder') //ruta relativa
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAll() {
  return Koders.find()
}

function create(koderData) {
  return Koders.create(koderData)
}

function deleteById(idKoder) {
  return Koders.findByIdAndDelete(idKoder)
}

function updateById(idKoder, newData) {
  return Koders.findByIdAndUpdate(idKoder, newData)
}

async function singup(koderData) {
  const { password, email } = koderData
  const koderByEmail = await Koders.findOne({ email }) 

  if (koderByEmail) {
    throw new Error('Email exists') // ! Se ejecita si ya existe el correo 
  }
  // * usamos await para no usar la promesa sino lo que regresa la promesa
  const passwordEncripted = await bcrypt.hash(password)

  return Koders.create({ ...koderData, password: passwordEncripted })
}

// creando login
async function login(email, passwordPlain) {
  const koderByEmail = await Koders.findOne({ email }) //Buscar el usuario en la bd

  if (!koderByEmail) {
    throw new Error('Email not found') // ! se ejecuta cuando no hay un koder
  }
  //verificando password
  const isValid = await bcrypt.compare(passwordPlain, koderByEmail.password)

  if (!isValid) {
    throw new Error('password not valid')
  }

  return jwt.sign({ id: koderByEmail._id })
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  singup,
  login,
}

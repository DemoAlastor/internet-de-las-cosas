//Dependencias Necesarias
const {Router} = require('express')
const router = Router()
const ControlPeticiones = require('../controller/ControlPeticiones')

//Rutas de peticiones
router.get('/peticionMicro', ControlPeticiones.micro)

//exportamos el modulo
module.exports = router
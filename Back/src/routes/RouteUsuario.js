//Dependencias Necesarias
const {Router} = require('express')
const router = Router()
const ControlUsuarios = require('../controller/ControlUsuarios')

//Creamos la ruta
router.post('/registrar', ControlUsuarios.crear)
router.post('/login', ControlUsuarios.login)
router.post('/logoff', ControlUsuarios.logoff)

//exportamos el modulo
module.exports = router
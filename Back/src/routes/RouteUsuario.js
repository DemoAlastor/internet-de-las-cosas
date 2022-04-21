//Dependencias Necesarias
const {Router} = require('express')
const router = Router()
const UserCrl = require('../controller/ControlUsuarios')

//Creamos la ruta
router.post('/crear', UserCrl.crear)
router.post('/login', UserCrl.login)
router.post('/logoff', UserCrl.logoff)

//exportamos el modulo
module.exports = router
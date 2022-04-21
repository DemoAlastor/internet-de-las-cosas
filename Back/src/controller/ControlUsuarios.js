//dependencias necesarias
const UsModel = require("../models/ModeloUsuario")
const bcrypt = require('bcryptjs')
const jws = require('jsonwebtoken')
const usuario = {}
const dotenv = require("dotenv").config("../");
const JTW_SECRET = process.env.JTW_SECRET
const TiempoExpiracionSegundos = 86400

//Creacion del nuevo Usuario
usuario.crear = async (req, res) => {
    const {nombre, correo, cedula, clave} = req.body
    const NuevoUsuario = new UsModel({nombre, correo, cedula, clave})
    try{
        const correoDup = await UsModel.findOne({correo: correo})
        const cedulaDup = await UsModel.findOne({cedula: cedula})
        if(correoDup && !cedulaDup){res.json({memsaje: 'correo ya registrado'})}
        if(cedulaDup && !correoDup){res.json({memsaje: 'cedula ya registrada'})}
        if(correoDup && cedulaDup){res.json({memsaje: 'cedula y correo ya registrados'})}
        if(!correoDup && !cedulaDup){
            NuevoUsuario.clave = await bcrypt.hash(clave, 10)
            const token = jws.sign({_id:NuevoUsuario._id}, JTW_SECRET, {expiresIn: TiempoExpiracionSegundos})
            await NuevoUsuario.save()
            res.cookie("jwt", token, {httpOnly: true, maxAge:TiempoExpiracionSegundos*1000})
            res.status(200).json({mensaje: 'Bienvenido', id: NuevoUsuario._id, nombre: NuevoUsuario.nombre, cedula: NuevoUsuario.cedula, token})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

//Logueo de Usuario
usuario.login = async (req, res) => {
    const {correo, clave} = req.body
    try {
        const usuario = await UsModel.findOne({correo: correo})
        if (!usuario) {return res.json({mensaje:'Correo Incorrecto'})}
        const pass = await bcrypt.compare(clave, usuario.clave) //desencripta contraseña
        if (pass){ 
            const token = jws.sign({_id: usuario._id}, JTW_SECRET, {expiresIn: TiempoExpiracionSegundos})
            res.cookie("jwt", token, {httpOnly: true, maxAge:TiempoExpiracionSegundos*1000})
            res.json({
                mensaje:'has iniciado sesion', 
                id: usuario.id, 
                nombre: usuario.nombre, 
                tipo: usuario.tipo, 
                token})
        }else{
            res.json({mensaje: 'Contraseña incorrecta'})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
    
}

//logoff de usuario
usuario.logoff = async (req, res) => {
    res.cookie("jwt", "", {maxAge: 1})
    res.send("sesion cerrada")
}

//Exportamos el Modulo
module.exports = usuario
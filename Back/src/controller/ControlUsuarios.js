//dependencias necesarias
const UsModel = require("../models/ModeloUsuario")
const bcrypt = require('bcryptjs')
const jws = require('jsonwebtoken')
const usuario = {}
const dotenv = require("dotenv").config("../");
const JTW_SECRET = process.env.JTW_SECRET

//Creacion del nuevo Usuario
usuario.crear = async (req, res) => {
    const {nombre, correo, cedula, clave} = req.body
    const NuevoUsuario = new UsModel({nombre, correo, cedula, clave})

    const correoDup = await UsModel.findOne({correo: correo})
    const cedulaDup = await UsModel.findOne({cedula: cedula})
    console.log(correoDup, cedulaDup)
    if(correoDup && !cedulaDup){res.json({memsaje: 'correo ya registrado'})}
    if(cedulaDup && !correoDup){res.json({memsaje: 'cedula ya registrada'})}
    if(correoDup && cedulaDup){res.json({memsaje: 'cedula y correo ya registrados'})}
    if(!correoDup && !cedulaDup){
        NuevoUsuario.clave = await bcrypt.hash(clave, 10)
        const token = jws.sign({_id:NuevoUsuario._id}, JTW_SECRET)
        await NuevoUsuario.save()
        res.json({mensaje: 'Bienvenido', id: NuevoUsuario._id, nombre: NuevoUsuario.nombre, cedula: NuevoUsuario.cedula, token})
    }
}

//Logueo de Usuario
usuario.login = async (req, res) => {
    const {correo, clave} = req.body
    const usuario = await UsModel.findOne({correo: correo})
    if (!usuario) {return res.json({mensaje:'Correo Incorrecto'})}

    const pass = await bcrypt.compare(clave, usuario.clave) //desencripta contraseña
    if (pass){ 
        const token = jws.sign({_id: usuario._id}, JTW_SECRET)
        res.json({
            mensaje:'has iniciado sesion', 
            id: usuario.id, 
            nombre: usuario.nombre, 
            tipo: usuario.tipo, 
            token})
    }else{
        res.json({mensaje: 'Contraseña incorrecta'})
    }

}

//Exportamos el Modulo
module.exports = usuario
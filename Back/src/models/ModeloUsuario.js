//dependencias necesarias
const mongoose = require('mongoose');

//Modelo de la base de datos
const UserSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    clave: String,
    cedula: Number,
    tipo: {type: String, default:'usuario'}
},{
    timestamps:{ createdAt: 'creado', updatedAt: 'modificado' }, //añade cuando se crea y modifica
    versionKey:false //quita la version en mongoose
});

//Exportamos el Modulo
module.exports = mongoose.model("Usuarios", UserSchema);
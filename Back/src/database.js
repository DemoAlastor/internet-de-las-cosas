//requerimiento de dependencias necesarias
const mongoose = require("mongoose");
const dotenv = require("dotenv").config("../");
const URI_DB = process.env.URI_DB

//configuracion de base de datos mongoose
mongoose.connect(URI_DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(db => console.log('Conexion con la base satisfactoria con la base:', db.connection.name))
.catch(err => console.log(err))

//exporta modulo
module.exports = mongoose
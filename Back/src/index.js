//requerimiento de dependencias necesarias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const dotenv = require("dotenv").config("../");
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT
const app = express()
require('./database')

//configuracion de puerto conexion
app.set('Port', PORT || 4000)

//uso de dependencias instaladas
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origin: "http://localhost:3000", optionsSuccessStatus: 200, credentials: true}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

//Rutas
app.use('/usuario', require('./routes/RouteUsuario'))
app.use('/peticiones', require('./middleware/MiddlewareUsuario'), require('./routes/RoutePeticiones'))

//escucha de nuestro servidor
app.listen(app.get('Port'),()=>{
    console.log('escuchando por el puerto', app.get('Port'))
})

// produccion o funcionando
if(NODE_ENV === "production"){
    app.use(express.static(`${__dirname}/site/`))
    app.use("*", (req, res) =>{
        res.sendFile(`${__dirname}/site/index.html`)
    });
};
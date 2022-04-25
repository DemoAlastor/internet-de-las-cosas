const jws = require('jsonwebtoken')

const validacionToken = (req, res, next) => {
    const token = req.cookies.jwt
    if(token){
        jws.verify(token, process.env.JTW_SECRET, (error, tokenDecodificado) => {
            if(error){
                res.status(400).send("Acceso Denegado", error.message)
            } else {
                res.locals.user = tokenDecodificado
                next()
            }
        })
    } else{
        res.status(400).send("Acceso Denegado")
    }
}

module.exports = validacionToken
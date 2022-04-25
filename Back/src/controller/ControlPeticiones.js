const peticion = {}

peticion.micro = async (req, res) => {
    const {_id} = res.locals.user
    res.send("el id del usuario " + _id)
}

module.exports = peticion
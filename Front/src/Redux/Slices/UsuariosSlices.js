import {createSlice} from "@reduxjs/toolkit"

const usuarioSlice  = createSlice({
    name: "usuario",
    initialState:{
        usuarioActual: null,
        error: {clave: null, correo: null}
    }
})
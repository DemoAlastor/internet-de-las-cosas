import React, {useState} from "react"
import {Form} from 'react-bootstrap'
import ImputP from '../Components/ImputP'
import {expresiones} from '../Components/ExpresionesRegulares'
import { postLogin } from '../Services/ServiciosUsuario'

export default function Login() {
  const [Correo, cambioCorreo] = useState({campo: '', valido: null})
  const [Clave, cambioClave] = useState({campo: '', valido: null})
  const [Mensaje, setMensaje] = useState(false)

  const OnSubmit = (e) => {
    e.preventDefault();
    postLogin({'correo': Correo.campo, 'clave': Clave.campo})
    .then((res) =>{
      if(res.data.token){setMensaje(res.data.mensaje)}
      else (setMensaje(res.data.mensaje))
    }).catch((err=>{
      console.log(err)
    }))
  }

  return (
    <Form className="card p-3 mx-auto mt-5" style={{ width: '20rem' }} onSubmit={OnSubmit}>
      <ImputP tipo = "email" label = "Correo" id ="loginCorreo" expresionRegular = {expresiones.correo}
        Estado = { Correo } cambioEstado = { cambioCorreo } habilitado={false}
        MensajeError="Correo no valido"/>
      <ImputP tipo = "password" label = "Clave" id ="loginClave" expresionRegular = {expresiones.password}
        Estado = { Clave } cambioEstado = { cambioClave } habilitado={false}
        MensajeError="Debe tener de 4 a 12 caracteres"/>
      {Mensaje ?(
      <div className="checkbox mb-3 mx-auto text-danger fw-bold">
        <small> {Mensaje} </small>
      </div>): null}
      <button className="btn btn-primary" type="submit">Ingresar</button>
    </Form>
  )
}
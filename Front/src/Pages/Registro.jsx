import React, {useState} from "react"
import {Form} from 'react-bootstrap'
import ImputP from '../Components/ImputP'
import {expresiones} from '../Components/ExpresionesRegulares'

const Registro = () => {
  const [Nombre, cambioNombre] = useState({campo: '', valido: null})
  const [Cedula, cambioCedula] = useState({campo: '', valido: null})
  const [Correo, cambioCorreo] = useState({campo: '', valido: null})
  const [Clave, cambioClave] = useState({campo: '', valido: null})
  const [confClave, cambioconfClave] = useState({campo: '', valido: null})
  const [Terminos, cambioTerminos] = useState(false)
  const [Formulario, cambioFormulario] = useState (true)

  const OnSubmit = (e) => {
    e.preventDefault();
  }

  const Validaciones = (e) => {
    if(
      Nombre.valido === true &&
      Cedula.valido === true &&
      Correo.valido === true &&
      Clave.valido === true &&
      Clave.campo === confClave.campo &&
      Terminos
      ){cambioFormulario(false)}
      else{cambioFormulario(true)}
  }

  return (
    <Form className="card p-3 mx-auto mt-5" style={{ width: '20rem' }} onSubmit={OnSubmit} >
      <ImputP tipo = "text" label = "Nombre" id ="registroNombre" expresionRegular = {expresiones.nombre}
        Estado = { Nombre } cambioEstado = { cambioNombre } habilitado={!Formulario}
        MensajeError="Nombre debe ser mayor de 4 digitos sin numeros o simbolos"/>
      <ImputP tipo = "number" label = "Cedula" id ="registroCedula" expresionRegular = {expresiones.telefono}
        Estado = { Cedula } cambioEstado = { cambioCedula } habilitado={!Formulario}
        MensajeError= "Debe ser un número de 7 a 14 digitos"/>
      <ImputP tipo = "email" label = "Correo" id ="registroCorreo" expresionRegular = {expresiones.correo}
        Estado = { Correo } cambioEstado = { cambioCorreo } habilitado={!Formulario}
        MensajeError="Correo no valido"/>
      <ImputP tipo = "password" label = "Clave" id ="registroClave" expresionRegular = {expresiones.password}
        Estado = { Clave } cambioEstado = { cambioClave } habilitado={!Formulario}
        MensajeError="Debe tener de 4 a 12 caracteres"/>
      <ImputP tipo = "password" label = "Confirmar Clave" id ="confirmarClave" expresionRegular = ""
        Estado = { confClave } cambioEstado = { cambioconfClave } habilitado={!Formulario}
        MensajeError="La contraseña debe coincidir" validador= {Clave.campo}/>
      <Form.Check className="mb-3" type="checkbox" id="Terminos" checked={Terminos} disabled={!Formulario}
      label="Acepto terminos y condiciones" onChange={ (e) =>{cambioTerminos(!Terminos)}}/>
      <button disabled={!Formulario} onClick={Validaciones} className="btn mb-1 btn-primary" type="buttom">Validar</button>
      <button disabled={Formulario} className="btn btn-primary" type="submit">Registrar</button>
    </Form>
  )
}
 
export default Registro;
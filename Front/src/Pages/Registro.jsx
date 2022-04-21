import React from "react"

const Registro = () => {
  return (
    <form className="card p-3 mx-auto mt-5" style={{ width: '20rem' }}>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="entradaNombre" placeholder="x"/>
        <label for="floatingInput">nombre</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="entradaCedula" placeholder="x"/>
        <label for="floatingInput">Cedula</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="entradaCorreo" placeholder="y"/>
        <label for="floatingInput">Correo</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="entradaClave" placeholder="z"/>
        <label for="floatingPassword">Contraseña</label>
      </div>
      <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
  )
}
 
export default Registro;
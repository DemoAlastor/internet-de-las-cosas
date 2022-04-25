import { getMicro } from '../Services/ServiciosUsuario'
import React, {useState} from "react"

const Inicio = () => {
    const [mensaje, cambiomensaje] = useState("")

    getMicro().then((res)=>{cambiomensaje(res.data)}).catch((err=>{cambiomensaje(err.response.data)}))
    return ( <div className="card p-3 mx-auto mt-5" style={{ width: '20rem' }}>
        <p>{mensaje}</p>
    </div> );
}
 
export default Inicio;
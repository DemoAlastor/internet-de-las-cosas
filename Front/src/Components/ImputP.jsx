import React, {useState} from 'react';
import {Form} from 'react-bootstrap'

function ImputP({tipo, label, id, Estado, cambioEstado, expresionRegular, MensajeError, validador, habilitado}) {
    const [Mensaje, cambioMensaje] = useState(null)
    const entrada = (e) => {
        cambioEstado({...Estado, campo: e.target.value})
    }

    const validacion = (e) => {
        if (expresionRegular){
            if(expresionRegular.test(Estado.campo)){
                cambioEstado({...Estado, valido: true})
                cambioMensaje(null)
            } else{
                cambioEstado({...Estado, valido: false})
                cambioMensaje(MensajeError)
            }
        } else{
            if (validador){
                if(validador.length>0){
                    if(validador !== Estado.campo){
                        cambioMensaje(MensajeError)
                        cambioEstado({...Estado, valido: false})
                    }
                    else{cambioMensaje(null)
                    cambioEstado({...Estado, valido: true})
                    }
                }
            }
        }
    }

    return (
        <>
            <Form.Group className="form-floating mb-2">
                <Form.Control disabled={habilitado} type={tipo} className="form-control" id={id} placeholder={label} 
                value={Estado.campo } onChange={entrada} onBlur={validacion} onKeyUp={validacion}/>
                <Form.Label htmlFor="floatingInput">{label}</Form.Label>
            </Form.Group>
            <Form.Label>{Mensaje}</Form.Label>
        </>
    );
}

export default ImputP;
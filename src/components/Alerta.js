import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Alerta(){
    return(
        <div id="alerta" style={{display: "none"}}>
            <Alert variant="success">
                Su compra se ha realizado con exito.
            </Alert>
        </div>
    )
}

export default Alerta;
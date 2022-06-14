import React, { useEffect, useState } from "react";

export const ComponenteStateEffect = () => {


    const [ puntos, setpuntos ] = useState(0);

    const saludar = () =>{
        console.log('Hola mundo');
    } 

    useEffect(()=>{
        saludar();//cada vez que se actulizan los puntos hago una acción
    }, [puntos])

    const sumarPuntos = () => {
        setpuntos( puntos + 1 )
    }


    return(
        <div>
            <h1>
                Puntuacion: { puntos }
            </h1>

            <button onClick={ sumarPuntos }>
                Sumar puntos
            </button>
        </div>
    )
}



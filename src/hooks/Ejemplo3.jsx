/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Inicializamos un estado vacio que va a rellenarse con
//los datos del padre
const miContexto = React.createContext(null) 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
*/
const Componente1 = () => {

    const state = useContext(miContexto);//miContexto seria sessionData que ya se lo pase abajo

    return (
        <div>
            <h1>
                El Token es: { state.token } {/*Muestro lo que le pase*/}
            </h1>
            {/*Pintamos el componente 2 (OSEA QUE EL COMPONENTE 1 TIENE EL COMPONENTE 2 DENTRO)*/}
            <Componente2></Componente2>
        </div>
    );
}
const Componente2 = () => {
    const state = useContext(miContexto);//miContexto seria sessionData que ya se lo pase abajo
    return (
        <div>
            <h2>
                La sesión es: { state.sesion }
            </h2>
        </div>
    );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //creamos EL estado de este componente ,RECORDEMOS QUE LA ESTRUCTURA ES const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    const [sessionData, setSessionData] = useState(estadoInicial);
    
    //creamos una funcion que modifique el componente
    function actualizarSesion() {
        setSessionData(
            {
                token: 'SDGAFDGHFD',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}> {/**le estoy pasando session data a los componentes anteriores*/}
            {/*Todo lo que esta aca adentro puede leer los datos de sessionData */}
            {/*Ademas si se actualiza,tambien cambian acá */}
            <h1>***Ejemplo de useState() y useContext()***</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar session</button>
        </miContexto.Provider>
    )
}




/** Ejemplo de uso del Hook useState
 * 
 * 
 * creamos un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y ademas poder modificarlo
 */////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'; 

const Ejemplo1 = () => {

    //Valor inicial para un contador,esto no se modifica nunca.
    const valorInicial = 0;

    //Valor inicial para una persona,esto no se modifica nunca.
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@gmail.com'
    }
    /**
     * usando los valores iniciales ya declarados, hacemos que useState cree funciones que permitan cambiar 
     * estas variables (enrealidad se esta creando nuevas variables cada vez que usamos esa funcion)
     * la estructura es:  const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Funcion para actualizar el estado que contiene el contador  
    */
    function incrementarContador(){
        // ? se usa funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
    */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
            }
        )        
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <h1>
                ***Ejemplo de useState() ***
            </h1>
            <h2>CONTADOR: {contador} </h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h4>Nombre: { persona.email }</h4>
            {/* Bloque de botones para actualizar el estado del componente  */}
            <button onClick={incrementarContador}>Incrementar contador</button> {/*aca usamos las funciones que creamos con useState para actualizar los valores o cambiarlos*/}
            <button onClick={actualizarPersona}>Actualizar persona</button> {/*aca usamos las funciones que creamos con useState para actualizar los valores o cambiarlos*/}
        </div>
    );
}

export default Ejemplo1;

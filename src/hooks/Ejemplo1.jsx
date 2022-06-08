/** Ejemplo de uso del Hook useState
 * 
 * 
 * creamos un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y ademas poder modificarlo
 */

import React, { useState } from 'react'; //cuando trabajos con hooks hay que importarlos,todos los hooks empiezan por use, son soluciones ya creadas por react que nos ayudana trabajar con componentes funcionales

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@gmail.com'
    }

    /**queremos que el VALORINICIAL y PERSONAINICIAL
     * sean parte del estado del componente para asi poder gestionar
     * su cambio y que este se vea reflejado en la vista del componente
     * la estructura es:  const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
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
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;

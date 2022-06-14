/**
 * Ejemplo de uso de:
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Vamos a crear dos contadores distintos
    //cada uno en un estado diferente
    //la estructura es:  const [nombreVariable, funcionParaCambiar] = useState(valorInicial)

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asocial una varaible
    //con un elemento del DOM del componente(vista HTML)

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con UseEffect
    */

    /**
     * ? el useEffect hace, Caso 1: Ejecutar siempre un snippet
     * ,osea que cada vez q hay un cambio se ejecuta lo que esta dentro del useEffect(),ahora haremos lo que debe hacer
    */
    // useEffect(()=>{
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencia a elemento del DOM:');
    //     console.log(miRef);
    // }, [contador1]); //estoy haciendo que solo pase cuando cambie el contador1, si no pongo nada afecta a todos los cambios


    /**
     * ? el useEffect hace, Caso 2: solo cuando cambie contador1 o contador2
     * ,osea que cada vez q hay un cambio en el contador 1, se ejecuta lo que haya en useEffect()
     * osea que cada vez q hay un cambio en el contador 2, se ejecuta lo que haya en useEffect()
    */

    useEffect(()=>{
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    }, [contador1, contador2]); //estoy haciendo que solo pase cuando cambie el contador1 o el contador2, si hubiera otro elemento que genere un cambio no pasaria nada ya que no estan dentro de la lista del useEffect()

    return (
        <div>
            <h1>
                ***Ejemplo de useState(), useRef() y useEffect() ***
            </h1>
            <h2>CONTADOR 1: {contador1} </h2>
            <h2>CONTADOR 2: {contador2} </h2>
            {/* Elemento referenciado  */}
            <h4 ref={ miRef }>{/*cada vez que haya un cambio se muestra en consola lo que le dije que muestre*/}
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;

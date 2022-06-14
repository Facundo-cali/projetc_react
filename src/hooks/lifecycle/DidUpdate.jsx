/**
 * Ejemplo de uso de metodo componentDidUpdate en componente clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

//ejemplo en componente clase
export default class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos porps o cambio en su estado privado');
    }

    render() {
        return (
        <div>
            <h1>DidUpdate</h1>
        </div>
        )
    }
}


//ejemplo en componente funcional , siempre se usa el useEffect
export const DidUpdateHook = () => {

    useEffect(() => {
        
        console.log('Comportamiento cuando el componente recibe nuevos porps o cambio en su estado privado');
    });// para q se ejecute todas las veces no ponemos corchetes
   
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}




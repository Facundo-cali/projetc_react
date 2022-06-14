/**
 * Ejemplo de uso del metodo componentWillUnmount para componente clase y para hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

//ejemplo en componente clase
export default class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }
    render() {
        return (
        <div>
            
        </div>
        )
    }
}

//ejemplo en componente funcional con hook
export const WillUnmountHook = () => {

    useEffect(() => {
        //aqui no ponemos nada, sino que en el return
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}



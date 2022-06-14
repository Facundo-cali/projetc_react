/**
 * Ejemplo de uso de metodo
 * de ciclo de vida en componente de clase y el hook de ciclo de vida en componentes funcionales
 */

import React, { Component, useEffect } from 'react'
//lifecycle ejemplo en componente class
export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM(renderice)');
    }
    render() {
        return (
        <div>
            <h1>DidMount</h1>
        </div>
        )
    }
}

//lifecycle ejemplo en componente funcional (hook)
export const DidMountHook = () => {
    useEffect(()=> { 
        console.log('Comportamiento antes de que el componente dea añadido al DOM(renderice)');
    },[])

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}











export default DidMount

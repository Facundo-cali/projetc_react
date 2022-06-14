/**
 * Ejemplo de componente tipo clase que dispone de los metodos de ciclo de vida
*/

import React, { Component } from 'react'
import PropTypes from "prop-types"

export class LifeCycleExample extends Component {

    constructor(props) {
      super(props)
      console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }
  
    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps: si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Controla si el componente debe o no actualizarse
         */
        //return true / false
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: Justo despues de actualizarse");
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Justo antes de desaparecer');
    }

    render() {
        return{
            <div>

            </div>
        }
    }
}


LifeCycleExample.propTypes = {

}




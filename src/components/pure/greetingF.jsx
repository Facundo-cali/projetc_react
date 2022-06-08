//componente tipo funcion, es mas potente porque siempre puede responder un html
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const GreetingF = (props) => {

    //Breve introduccion a useState(es una funcion que nos permite crear un stado privado para este componente de tipo funcion)
    //la estructura de useState es const [variable, metodo para actualizarlo] = useState(valor inicial);
    const [age, setage] = useState(29);

    const birthday = () => {
        //este metodo se encarga de actualizar el state
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                Hola {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: { age } años
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};

GreetingF.propTypes = {
    name: PropTypes.string
};

export default GreetingF;

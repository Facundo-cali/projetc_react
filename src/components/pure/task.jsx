//task seria cada tarea individual

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({ task }) => { //le paso la tarea


    //usamos un useEffect para controlar cuando una tarea desparece cuando la tengamos que borrar, modificar etc
    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task ${task.name} is going to unmount`)
        };
    }, [task]);//cada modificacion que haya en el task se generara este useEffect

    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripción: { task.description }
            </h3>
            <h4>
                Nivel: { task.level }
            </h4>
            <h5>
                Esta tarea esta: { task.completed ? 'COMPLETADA':'PENDIENTE'}  
            </h5> 
        </div>
    );//dependiendo si es true o false pongo si la tarea esta completada o no
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task) //esto verifica que lo que estoy pasando es una tarea(la que cree en task.class) y no un string ni numero ni nada.
};


export default TaskComponent;

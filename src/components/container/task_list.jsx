//este es el contenedor grande donde tengo todas las tareas
//1- app renderiza a task_list
//2- task_list renderiza cada task.

import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL); //le estoy enviando una tarea default para que react ejecute cuando encuentre TaskListComponent

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);//por defecto esta cargando y cuando ya esta listo lo ponemos en false

    //Control del ciclo de video del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);//aca pasamos el loading a false cuando ya este lista la tarea
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);



    const changeCompleted = (id) =>{
        console.log('TODO: cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            { /* {TODO: Aplicar un For/Map para renderizar una lista (la idea es repetir una lista de html varias veces para cada tarea,esto queda pendiente para despues)} */ }
            <TaskComponent task={defaultTask}></TaskComponent> { /*Le estoy enviando cada tarea individual (TaskComponent)*/ }
        </div>
    );
};


//no es necesario poner prop types.


export default TaskListComponent;



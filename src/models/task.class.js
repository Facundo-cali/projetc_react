import { LEVELS } from "./levels.enum";
//la pagina busca hacer una especie de lista donde puedo poner tareas y a medida que las hago o se cumplen se pueden quitar.
//creo una clase donde creo la estructura de las tareas, cada tarea tiene nombre, descripcion, si esta completada o no y nivel de urgencia.
export class Task {
    //por defecto es:
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;
    


    constructor(name, description, completed, level){  // creo tareas 
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
    }
}
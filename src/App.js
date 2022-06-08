import logo from './logo.svg';
import './App.css';
import Ejemplo4 from './hooks/Ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Martin"></Greeting> */}

        {/* Componente de ejemplo funcional: */}
        {/* <GreetingF name = "Facu"></GreetingF> */}

        {/* Componente de listado de tareas: */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/*Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre= "Martin">
          {/* ? Todo lo que hay aca se muetra por el children */}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;

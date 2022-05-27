import "./App.css";
import Clock from "./components/pure/clock";
import ClockComponent from "./hooks/ClockComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Componente propio Greeting.jsx*/}
        {/* <Greeting  name="Juan David"></Greeting> */}
        {/* <GreetingF name="Roberto"></GreetingF> */}
        {/* Componente de Listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactListComponent></ContactListComponent> */}
        {/* Ejemplos de usos de hook */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Juan">
          //todo lo que hay aqui es tratado como props.children 
          <h3>contenido del children</h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Juan"></GreetingStyled> */}
        <Clock></Clock>
        <ClockComponent></ClockComponent>
      </header>
    </div>
  );
}

export default App;

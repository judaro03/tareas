import "./App.css";
import ContactListComponent from "./components/container/contact_list";
import TaskListComponent from "./components/container/task_list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Componente propio Greeting.jsx*/}
        {/* <Greeting  name="Juan David"></Greeting> */}
        {/* <GreetingF name="Roberto"></GreetingF> */}
        {/* Componente de Listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;

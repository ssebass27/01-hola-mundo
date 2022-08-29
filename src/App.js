import logo from './logo.svg';
import './App.css';
import Greeting from './component/pure/greeting';
import Greetingf from './component/pure/greetingF';
import TaskListComponent from './component/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Component propio greeting.jsx */}
          {/* <Greeting name="Martin"></Greeting> */}
          {/* Componente de ejemplo funcional */}
          {/* <Greetingf name="Martin"></Greetingf> */}
          {/* Componente de Listado de Tareas */}
          <TaskListComponent></TaskListComponent>
        </p>
      </header>
    </div>
  );
}

export default App;

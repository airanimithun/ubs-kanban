import './App.css';
import Board from './components/Board';
import { TasksProvider } from './context/TasksProvider';


function App() {
  
  return (
    <div>
      <TasksProvider>
        <Board />
      </TasksProvider>
    </div>
  );
}

export default App;

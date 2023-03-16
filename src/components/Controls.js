import { useState } from "react";
import { useListTasks } from "../context/TasksProvider";

const Controls = () => {

  const [newTaskName, setNewTaskName] = useState('');
  const [, dispatch, selectedTask] = useListTasks();

  const createNewTask = (e) => {
    e.preventDefault();
    if (!newTaskName) {
      return;
    }
    dispatch({type:'create', payload: newTaskName})
  };

  const deleteTask = (e) => {
    e.preventDefault();
    dispatch({type:'delete', payload: selectedTask})
  };

  return (
    <div>
      <div className="create-new-container">
        <input
          className="create-new-text"
          placeholder="Create New Task"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button
          className="create-new-btn"
          onClick={ createNewTask}
        >
          Create New Task
        </button>
      </div>
      <div className="actions-container">
        <input className="selected-task-text" value={ selectedTask?.name || '' } placeholder="Selected Task" readOnly={true} />        
        <button className="delete-task-btn" disabled={!Object.keys(selectedTask).length} onClick={deleteTask}>Delete Task</button>
      </div>
    </div>
  )
};

export default Controls;

import { useState } from "react";

const Controls = ({ createNewTask, selectedTask }) => {
  const [newTaskName, setNewTaskName] = useState('');

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
          onClick={ () => createNewTask(newTaskName)}
        >
          Create New Task
        </button>
      </div>
      <div className="actions-container">
        <input className="selected-task-text" value={ selectedTask } placeholder="Selected Task" readOnly={true} />
        <button className="move-forward-btn">Move Forward</button>
        <button className="move-backword-btn">Move Backword</button>
        <button className="delete-task-btn">Delete Task</button>
      </div>
    </div>
  )
};

export default Controls;

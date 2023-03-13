import { useState } from "react";
import { useListTasks, useSelectedTask, tasksObj } from "../context/TasksProvider";

const Controls = () => {

  const [newTaskName, setNewTaskName] = useState('');
  const [allTask, setAllTasks] = useListTasks();
  const [selectedTask, setSelectedTask] = useSelectedTask();

  const createNewTask = (taskName) => {
    if (!taskName) {
      return;
    }
    const tempTaskObj = [...allTask];

    tempTaskObj[0]?.tasks?.push({ id: Date.now(), name: taskName });

    setAllTasks(tempTaskObj);
  };

  const deleteTask = () => {
    if (!selectedTask) {
      return;
    }
    const { id, stageIndex } = selectedTask;
    let selectedTasksArr = allTask[stageIndex].tasks;
    const tempAllTask = [...allTask];

    selectedTasksArr = selectedTasksArr.filter(task => task.id !== id);
    tempAllTask[stageIndex].tasks = selectedTasksArr;
    setAllTasks(tempAllTask);
    setSelectedTask({});
  };

  const moveTask = (newIndex) => {
    const { id, stageIndex } = selectedTask;
    if (stageIndex === undefined || id === undefined) {
      return;
    }
    let selectedTasksArr = allTask[stageIndex].tasks;
    const tempAllTask = [...allTask];
    selectedTasksArr = selectedTasksArr.filter(task => task.id !== id);

    tempAllTask[stageIndex].tasks = selectedTasksArr;
    tempAllTask[newIndex].tasks.push(selectedTask);
    setAllTasks(tempAllTask);
    setSelectedTask({});
  };

  const moveTaskForward = () => {
    const { stageIndex } = selectedTask;

    if (stageIndex === tasksObj.length - 1) {
      return;
    }
    moveTask(stageIndex + 1);
  };

  const moveTaskBackward = () => {
    const { stageIndex } = selectedTask;

    if (stageIndex === 0) {
      return;
    }
    moveTask(stageIndex - 1);
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
          onClick={ () => createNewTask(newTaskName)}
        >
          Create New Task
        </button>
      </div>
      <div className="actions-container">
        <input className="selected-task-text" value={ selectedTask?.name || '' } placeholder="Selected Task" readOnly={true} />
        <button className="move-backword-btn" disabled={!Object.keys(selectedTask).length || selectedTask.stageIndex === 0} onClick={moveTaskBackward}>{`< Move Backword`}</button>
        <button className="move-forward-btn" disabled={!Object.keys(selectedTask).length || selectedTask.stageIndex === 3} onClick={moveTaskForward}>{`Move Forward >`}</button>
        <button className="delete-task-btn" disabled={!Object.keys(selectedTask).length} onClick={() => deleteTask()}>Delete Task</button>
      </div>
    </div>
  )
};

export default Controls;

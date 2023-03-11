import Stage from "./Stage"
import { useState } from "react";
import Controls from './Controls';

/**
 * 
 * Approach:
 * Maintain global board state and pass them to child component
 * Manage CRUD operations
 * Pass states to the children
 * Handle border conditions like moving after Done or Backlog
 * 
 */
const Board = () => {
  const tasksObj = [
    {name: 'backlog', displayName: 'Backlog', tasks: []},
    {name: 'todo', displayName: 'Todo', tasks: []},
    {name: 'in-progress', displayName: 'In Progress', tasks: []},
    {name: 'done', displayName: 'Done', tasks: []},
  ];
  const [allTask, setAllTasks] = useState(tasksObj);
  const [selectedTask, setSelectedTask] = useState({});

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

  const onSelectTask = (task) => {
    setSelectedTask(task);
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
    <>
      <Controls
        createNewTask={createNewTask}
        selectedTask={selectedTask}
        moveTaskForward={moveTaskForward}
        moveTaskBackward={moveTaskBackward}
        deleteTask={deleteTask} />
      <div
        className="board">
        {
          allTask.map((stage, index) => (
            <Stage
              key={stage.name}
              stageIndex={index}
              {...stage}
              onSelectTask={onSelectTask}
            />))
        }
      </div>
    </>
  )
};

export default Board;

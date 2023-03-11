import Stage from "./Stage"
import { useState } from "react";
import Controls from './Controls';

const Board = () => {
  // const stages = ['backlog', 'todo', 'onGoing', 'done'];
  const tasksObj = [
    [{name: 'backlog', displayName: 'Backlog'}, []],
    [{name: 'todo', displayName: 'Todo'}, []],
    [{name: 'in-progress', displayName: 'In Progress'}, []],
    [{name: 'done', displayName: 'Done'}, []],
  ];
  const [allTask, setAllTasks] = useState(tasksObj);
  const [selectedTask, setSelectedTask] = useState({});

  const createNewTask = (taskName) => {
    if (!taskName) {
      return;
    }
    const tempTaskObj = [...allTask];

    tempTaskObj[0][1].push({ id: Date.now(), name: taskName });

    setAllTasks(tempTaskObj);
  };

  const deleteTask = () => {
    // selectedTask
    if (!selectedTask) {
      return;
    }
    const { id, stageIndex } = selectedTask;
    let selectedTasksArr = allTask[stageIndex][1];
    const tempAllTask = [...allTask];

    selectedTasksArr = selectedTasksArr.filter(task => task.id !== id);
    tempAllTask[stageIndex][1] = selectedTasksArr;
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
    let selectedTasksArr = allTask[stageIndex][1];
    const tempAllTask = [...allTask];
    selectedTasksArr = selectedTasksArr.filter(task => task.id !== id);

    tempAllTask[stageIndex][1] = selectedTasksArr;
    tempAllTask[newIndex][1].push(selectedTask);
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

    if (stageIndex === tasksObj.length - 1) {
      return;
    }
    moveTask(stageIndex - 1);
  };

  return (
    <>
      <Controls createNewTask={createNewTask} selectedTask={selectedTask} moveTaskForward={moveTaskForward} moveTaskBackward={moveTaskBackward} deleteTask={deleteTask} />
      <div className="board">
        {allTask.map((stage, index) => <Stage key={stage[0].name} stageIndex={index} {...stage[0]} tasks={stage[1]} onSelectTask={onSelectTask} />)}
      </div>
    </>
  )
};

export default Board;
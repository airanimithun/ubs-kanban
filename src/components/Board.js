import Stage from "./Stage"
import { useEffect, useState } from "react";
import Controls from './Controls';

const Board = () => {
  // const stages = ['backlog', 'todo', 'onGoing', 'done'];
  const tasksObj = [
    [['Backlog'], []],
    [['Todo'], []],
    [['OnGoing'], []],
    [['Done'], []],
  ];
  const [allTask, setAllTasks] = useState(tasksObj);
  const [selectedTask, setSelectedTask] = useState('');

  const createNewTask = (taskName) => {
    const tempTaskObj = [...allTask];

    tempTaskObj[0][1].push({ id: Date.now(), name: taskName });

    setAllTasks(tempTaskObj);
  };

  const onSelectTask = ({id, name}) => {
    debugger;
    setSelectedTask(name);
  };

  return (
    <>
      <Controls createNewTask={createNewTask} selectedTask={ selectedTask } />
      <div className="board">
        {allTask.map(stage => <Stage key={stage[0]} stageName={stage[0]} tasks={stage[1]} onSelectTask={onSelectTask} />)}
      </div>
    </>
  )
};

export default Board;
import Stage from "./Stage"
import Controls from './Controls';
import { useListTasks } from "../context/TasksProvider";

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
  const [allTask] = useListTasks();
  
  return (
    <>
      <Controls />
      <div
        className="board">
        {
          allTask.map((stage, index) => (
            <Stage
              key={stage.name}
              stageIndex={index}
              {...stage}
            />))
        }
      </div>
    </>
  )
};

export default Board;

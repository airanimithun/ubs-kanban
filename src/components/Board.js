import Controls from './Controls';
import TaskBoard from './TaskBoard';

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
  return (
    <>
      <Controls />
      <TaskBoard />      
    </>
  )
};

export default Board;

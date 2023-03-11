
const Tasks = ({ name, id, onSelectTask, stageIndex }) => {
  return (
    <div className="task" onClick={() => onSelectTask({ id, name, stageIndex })}>
      <h3>{name}</h3>
    </div>
  )
};

export default Tasks;

const Tasks = ({ name, id, onSelectTask }) => {
  return (
    <div className="task" onClick={() => onSelectTask({id, name})}>
      {name}
    </div>
  )
};

export default Tasks;
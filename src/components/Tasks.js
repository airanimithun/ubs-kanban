import { useSelectedTask } from "../context/TasksProvider";

const Tasks = ({ name, id, stageIndex }) => {
  const [, setSelectedTask] = useSelectedTask();
  return (
    <div className="task" onClick={() => setSelectedTask({ id, name, stageIndex })}>
      <h3>{name}</h3>
    </div>
  )
};

export default Tasks;
import Tasks from "./Tasks";

const Stage = ({ stageName, tasks, onSelectTask }) => {
  console.log('task', tasks);
  return (
    <div key={stageName} className="stage">
      <h3 className="stage-name">{stageName}</h3>
      {tasks?.map(task => <Tasks key={stageName} {...task} onSelectTask={onSelectTask} />) }
    </div>
  )
};

export default Stage;

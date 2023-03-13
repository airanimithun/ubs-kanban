import Tasks from "./Tasks";

const Stage = ({ name, displayName, tasks, stageIndex }) => {

  return (
    <div key={name} className={`stage ${name}`}>
      <h3 className="stage-name">{displayName}</h3>
      {tasks?.map(task => <Tasks key={task.id} {...task} stageIndex={stageIndex} />) }
    </div>
  )
};

export default Stage;

import React from 'react';
import { useListTasks } from "../context/TasksProvider";
import Stage from "./Stage"

const TaskBoard = () => {
    const [allTask] = useListTasks();
    return (
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
    )
}

export default TaskBoard;
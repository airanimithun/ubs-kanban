import React, { useContext, createContext, useState } from 'react';

const ListTasksContext = createContext();
const SelectedTaskContext = createContext();

export const useListTasks = () => {    
    return useContext(ListTasksContext);
}

export const useSelectedTask = () => {
    return useContext(SelectedTaskContext);
}

export const tasksObj = [
    {name: 'backlog', displayName: 'Backlog', tasks: []},
    {name: 'todo', displayName: 'Todo', tasks: []},
    {name: 'in-progress', displayName: 'In Progress', tasks: []},
    {name: 'done', displayName: 'Done', tasks: []},
];

export const TasksProvider = ({children}) => { 
    
    const [allTask, setAllTasks] = useState(tasksObj);
    const [selectedTask, setSelectedTask] = useState({});
    
    return(
        <ListTasksContext.Provider value={[allTask, setAllTasks]}>
            <SelectedTaskContext.Provider value={[selectedTask, setSelectedTask]}>
                {children}
            </SelectedTaskContext.Provider>
        </ListTasksContext.Provider>
    )
    

}
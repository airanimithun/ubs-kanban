import React, { useContext, createContext, useState, useReducer } from 'react';
import reducer from '../reducers/TaskReducer';

const ListTasksContext = createContext();

export const useListTasks = () => {    
    return useContext(ListTasksContext);
}

export const tasksObj = [
    {name: 'backlog', displayName: 'Backlog', tasks: []},
    {name: 'todo', displayName: 'Todo', tasks: []},
    {name: 'in-progress', displayName: 'In Progress', tasks: []},
    {name: 'done', displayName: 'Done', tasks: []},
];

export const TasksProvider = ({children}) => {    
    const [allTask, dispatch] = useReducer(reducer, tasksObj);
    const [selectedTask, setSelectedTask] = useState({});
    return(
        <ListTasksContext.Provider value={[allTask, dispatch, selectedTask, setSelectedTask]}>
            {children}
        </ListTasksContext.Provider>
    )
}
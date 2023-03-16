function reducer(state, action) {
    let newState;
    let newTasks;
    let newStage;
    switch(action.type) {
        case 'create':
            newState = [...state];
            newTasks = [...newState[0].tasks]
            newTasks.push({id: new Date(), name: action.payload})
            newStage = {
                ...newState[0],
                tasks: newTasks
            }
            newState[0] = newStage;            
            return newState;
        case 'delete':
            newState = [...state];
            newTasks = [...newState[0].tasks]
            newStage = {
                ...newState[0],
                tasks: newTasks.filter((e) => e.id !== action.payload.id)
            }
            newState[0] = newStage; 
            return newState;            
        default:
            return state;
    }
}

export default reducer;
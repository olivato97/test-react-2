import { combineReducers } from 'redux'

const counter = (store = { count: 0 }, action) => {
    const count = store.count

    switch (action.type) {
        case 'increase':
            return { count: count + 1, }
        case 'decrese':
            return { count: count - 1, }
        default:
            return store
    }
}

const addToDoList = (store = { ToDoList: [] }, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            store.ToDoList = [
                ...store.ToDoList,
                {
                    id: 0,
                    text: action.text,
                    completed: false
                }
            ]
            return store;

        default:
            return store
    }
}

// export default counter;

export default combineReducers({
    counter,
    addToDoList
})

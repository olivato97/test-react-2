import { combineReducers } from 'redux'

const counter = (state = { count: 0 }, action) => {
    const count = state.count

    switch (action.type) {
        case 'increase':
            return { count: count + 1, }
        case 'decrese':
            return { count: count - 1, }
        default:
            return state
    }
}

const toDoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: 0,
                    text: action.text,
                    completed: false
                }
            ]

        default:
            return state
    }
}

// export default counter;

export default combineReducers({
    counter,
    toDoList
})

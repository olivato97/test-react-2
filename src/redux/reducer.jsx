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

var ID_toDoList = 0
const toDoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: ID_toDoList++,
                    text: action.text,
                    completed: false
                }
            ]

        default:
            return state
    }
}

const LogIn = (state = { tipo: "ospite", logIn: false }, action) => {
    switch (action.type) {
        case "logIn":
            return {
                tipo: action.text,
                logIn: action.toggle
            }
        default:
            return state
    }
}
// export default counter;

export default combineReducers({
    counter,
    toDoList,
    LogIn
})

import { combineReducers } from 'redux'
import uuidv1 from 'uuid/v1'
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

var IdMemberNew = uuidv1()
const LogIn = (state = [{ IdMember: uuidv1(), tipo: "ospite", username: "ospite", password: "ospite", logIn: false }], action) => {
    switch (action.type) {
        case "logIn":
            return action.state
        case 'AddMember':
            return [
                ...state,
                {
                    IdMember: IdMemberNew,
                    username: action.username,
                    password: action.password,
                    tipo: action.tipo,
                    logIn: false
                }
            ]
        default:
            return state
    }
}
// export default counter;

export default combineReducers({
    counter,
    LogIn
})

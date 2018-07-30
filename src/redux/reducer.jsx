import { combineReducers } from 'redux'
import uuidv1 from 'uuid/v1'
import axios from 'axios';





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

const LogIn = (state = [], action) => {
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3004/state')
            return response;

        } catch (error) {
            console.log(error)

        }
        return state
    }
    switch (action.type) {
        case "logIn":
            debugger
            axios.patch('http://localhost:3004/state?id' + action.IdMember, ...state, {
                logIn: action.state
            })
                .then(function (response) {
                    console.log(response);
                    return action.state
                })
                .catch(function (error) {
                    console.log(error);
                })
            return action.state
        case 'AddMember':
            debugger
            var IdMemberNew = uuidv1()

            return [
                axios.post('http://localhost:3004/state', {
                    id: IdMemberNew,
                    username: action.username,
                    password: action.password,
                    tipo: action.tipo,
                    logIn: false
                })
                    .then(function (response) {
                        console.log(response);
                        return state
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

            ]
        default:
            debugger
            getData().then(
                function (val) {
                    console.log("resolve: ")
                    state = val.data
                    console.log(state)
                    return state
                })
            debugger
            console.log(state)
            return state


        // export default counter;
    }
}


export default combineReducers({
    counter,
    LogIn
})

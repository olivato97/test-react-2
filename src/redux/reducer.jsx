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

const LogIn = (state = [{
    "id": "7e04a610-93f3-11e8-9a3e-27d0441d344e",
    "username": "ospite",
    "password": "1234",
    "tipo": "ospite",
    "logIn": false
  },
  {
    "id": "9bfec060-93f3-11e8-a4a9-71ddb2374e3a",
    "username": "admin",
    "password": "admin",
    "tipo": "admin",
    "logIn": false
  }], action) => {
    async function getData() {
        const response = await axios.get('http://localhost:3004/state')

        return response
    }
    switch (action.type) {
        case "logIn":
            debugger
            axios.patch('http://localhost:3004/state?id=' + action.IdMember, ...state, {
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
            getData()
            console.log("resolve: ")
            console.log(state)
            var ciao = action.payload
            console.log(ciao)
            return state
        // export default counter;
    }
}


export default combineReducers({
    counter,
    LogIn
})

export const increaseAction = () => ({
    type: 'increase'
})

export const decreseAction = () => ({
    type: 'decrese'
})

export const addList = (tipo, username, password) => ({
    type: 'AddMember',
    tipo,
    username,
    password
})

export const ToggleLogIn = (state) => ({
    type: 'logIn',
    state
})

export function loadCategories() {
    return {

        type: 'CALL', //success type
        payload: {
            request: {
                url: 'http://localhost:3004/state',
                method: 'POST',
                data: {
                    "id": "7e04a610-93f3-11e8-9a3e-27d0441d344a",
                    "username": "call",
                    "password": "callll",
                    "tipo": "admin",
                    "logIn": false
                }
            }
        }
    }
}

export function loadCategorieSuccess() {
    return {
        type: 'CALL_SUCCESS',
        payload: {}
    }
}
export function loadCategoriesFail() {
    return {
        type: 'CALL_FAIL',
        payload: {}
    }
}
export const increaseAction = () => ({
    type: 'increase'
})

export const decreseAction = () => ({
    type: 'decrese'
})

export const addList = (tipo,username, password) => ({
    type: 'AddMember',
    tipo,
    username,
    password
})

export const ToggleLogIn = (state) =>({
    type: 'logIn',
    state
})


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

export const ToggleLogIn = (tipo, toggle, username, password) =>({
    type: 'logIn',
    tipo,
    toggle,
    password,
    username
})


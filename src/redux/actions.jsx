export const increaseAction = () => ({
    type: 'increase'
})

export const decreseAction = () => ({
    type: 'decrese'
})

export const addToDoList = (text) => ({
    type: 'ADD_TODO',
    text
})

export const ToggleLogIn = (text, toggle ) =>({
    type: 'logIn',
    tipo: text,
    logIn: toggle

})


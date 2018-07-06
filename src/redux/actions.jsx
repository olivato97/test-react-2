/* const increaseAction = { type: 'increase' }
const decreseAction = { type: 'decrese' }

export { increaseAction, decreseAction }
 */

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


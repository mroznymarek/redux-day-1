import { createStore } from 'redux'

const reducer = () => { }

export const store = createStore(reducer)

console.log(store)
console.log(store.getState())
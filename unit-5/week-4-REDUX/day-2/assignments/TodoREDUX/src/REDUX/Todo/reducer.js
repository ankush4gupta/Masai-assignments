import { store } from "../store";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./action";
const init = { todos: [] }
export const todoReducer = (store = init, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {

                ...store, todos: payload
            };
        case TOGGLE_TODO:
           return {
               ...store,
               todos: store.todos.map(e => e.id === payload?{...e,status : !e.status}:e)
           }
        case DELETE_TODO:
            
            return {
                ...store, todos:store.todos.filter(e =>e.id !== payload)
            }




        default: return store;
    }
}
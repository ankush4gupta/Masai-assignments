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
            // console.log(store.todos[1].status, "store.todos")
            if (store.todos.find(e => e.id === payload).status) {
                
                store.todos.find(e => e.id === payload).status = false;
            } else {
              
                store.todos.find(e => e.id === payload).status = true;
            }
            return store;
        case DELETE_TODO:
            let newtodos = store.todos.filter((e) => {
                return e.id !== payload;
            })

            console.log(newtodos);
            return {
                ...store, todos: newtodos
            }




        default: return store;
    }
}
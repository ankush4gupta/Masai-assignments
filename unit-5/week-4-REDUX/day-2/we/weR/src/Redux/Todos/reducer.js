import { ADD_TODO } from "./action";

const init = { todo: [] }
export const todoReducer = (store = init, { type, payload }) => {
    switch (type) {

        case ADD_TODO:
            return {
                ...store, todo: payload
            }

        default: return store;
    };
};
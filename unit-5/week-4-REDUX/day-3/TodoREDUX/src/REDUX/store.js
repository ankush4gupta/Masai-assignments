import { combineReducers, legacy_createStore as createStore } from "redux";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
    todos: todoReducer
})
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store.getState())
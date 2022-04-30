import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { counterReducer } from "./CounterFeature/reducer";
import { todoReducer } from "./Todos/reducer"
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})
const middleware = (store) => (next) => (action) => {
    if(typeof action ==="function"){
        return action(store.dispatch)
    }
    next(action);
    // console.log("end");
}
export const store = createStore(rootReducer, applyMiddleware(thunk)
    // applyMiddleware(middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(() => {
    console.log(store.getState())
})
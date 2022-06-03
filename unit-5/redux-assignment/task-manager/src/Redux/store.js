import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
    AuthReducer: AuthReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})
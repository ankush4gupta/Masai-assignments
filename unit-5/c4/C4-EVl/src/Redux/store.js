import { combineReducers, legacy_createStore as createStore } from "redux";
import { Authreducer } from "./Auth/reducer";
// import { Userreducer } from "./Product/reducer"
const rootReducer = combineReducers({
    Auth: Authreducer,
    // User: Userreducer
})

export const store = createStore(rootReducer);
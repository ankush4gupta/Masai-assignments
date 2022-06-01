import { combineReducers, legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CityReducer } from "./Cities/reducer";
import { CountryReducer } from "./Countries/reducer"
const rootReducer = combineReducers({
    CityReducer : CityReducer,
    CountryReducer: CountryReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})
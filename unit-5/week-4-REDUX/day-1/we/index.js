import { legacy_createStore as createStore } from "redux";
const reducer = (store, action) => {
    switch (action.type) {
        case "ADDTODO":
            return { ...store, count: store.count + action.payload };
        case "TODO":
            return { ...store, todo: [...store.todo, action.payload] };
        default: return store
    }

}
const initail = {
    count: 0,
    todo: [{
        title: "redux",
        state: true
    }]
}
const store = createStore(reducer, initail);
store.dispatch({ type: "ADD-TODO", payload: 2 })
store.dispatch({ type: "TODO", payload: { title: "react", state: false } })
console.log(store.getState())
import './style.css'

import { legacy_createStore as createStore } from "redux";
const initail = {
  todo: []
}
const reducer = (store, action) => {
  switch (action.type) {
    case TODO:
      return {
        ...store, todo: [...store.todo, action.payload]
      };
    default: return store
  }
}




const TODO = "TODO";

const store = createStore(reducer, initail)



document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <input type="text">
    <button id ="btn">Add todo</button>
    <div id="myt"></div>
 
`
document.querySelector("#btn").onclick = () => {
  document.querySelector("#myt").innerHTML = ""
  let value = document.querySelector("input").value;
  store.dispatch({ type: "TODO", payload: { title: value, state: false } })

  let d = store.getState()
  console.log(d.todo)
  d.todo.map((e) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = e.title;
    let status = document.createElement("p");
    status.innerHTML = e.state;
    status.onclick = (
      toggletodo()
    )
    div.append(p, status);
    document.querySelector("#myt").append(div)
  })

}
function toggletodo(){
  
}






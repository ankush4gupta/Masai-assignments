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
    case TOGGLE:
      console.log(action.payload, store.todo)
      return {
        
        ...store, todo: store.todo.map(e => e.title === action.payload ? { ...e, state: !e.state } : e)
      }
    case DELETE:
      return {
        ...store,todo : store.todo.filter(e=>e.title!==action.payload)
      }
    default: return store
  }
}




const TODO = "TODO";
const TOGGLE = "TOGGLE";
const DELETE = "DELETE"

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

    let btn = document.createElement("button");
    btn.innerHTML = "Toggle"
    btn.onclick = () => {
      toggletodo(e.title)
    }
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Delete";
    btn2.addEventListener("click",()=>{
      mydel(e.title)
    })
    div.append(p, status, btn,btn2);
    document.querySelector("#myt").append(div)
  })

}


function toggletodo(title) {
  console.log(title)
  store.dispatch({ type: "TOGGLE", payload: title })
}
function mydel(title){
  store.dispatch({ type: "DELETE", payload: title })
}







import './App.css'
import { addCount, addTodo } from './Redux/action'
// import { store } from "./Redux/store";
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
function App() {
  const dispatch = useDispatch()
  const counter = useSelector((store) => store.counter);
  const todos = useSelector((store) => store.todo)
  const [text, settext] = useState()
  const handleTodo = () => {
    dispatch(addTodo({ title: text, status: false }))

  }
  return (
    <div className="App">
      <div>
        <h3>  counter : {counter}</h3>
        <button onClick={
          () => {
            dispatch(addCount(1))
          }
        }>ADD 1</button>
      </div>
      <hr></hr>
      <div>
        <h2>Todo</h2>
        <input type="text" name="" id="" onChange={(e) => settext(e.target.value)} />
        <button onClick={handleTodo}>Add todo</button>
        {
          todos.map((e) => {
            return <div>{e.title}</div>
          })
        }
      </div>
    </div>
  )
}

export default App

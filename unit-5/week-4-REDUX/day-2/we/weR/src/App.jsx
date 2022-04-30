import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { addCount } from './Redux/CounterFeature/action'
import { addTodo, getdata } from './Redux/Todos/action'
// import { store } from "./Redux/store";
import { useDispatch, useSelector } from "react-redux"
// import { useState } from 'react';
function App() {
  const dispatch = useDispatch()
  const counter = useSelector((store) => store.counter.counter);
  const todos = useSelector((store) => store.todos.todo);
  console.log("todos", todos)
  const [text, settext] = useState();
  useEffect(() => {
    dispatch(getdata())
  }, [])
  // const getdata = () => {
  //   axios.get(`http://localhost:8080/todos`).then((res) => {
  //     dispatch(addTodo(res.data))
  //   })
  // }
  const handleTodo = () => {
    // dispatch(addTodo({ title: text, status: false }))
    axios.post(`http://localhost:8080/todos`, { title: text, status: false });
    () => {
      dispatch(getdata())
    }

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
            return <div key={e.id}>{e.title}</div>
          })
        }
      </div>
    </div>
  )
}

export default App

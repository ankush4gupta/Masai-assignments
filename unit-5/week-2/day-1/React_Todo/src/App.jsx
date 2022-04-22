import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Todoinput } from './Components/TodoInput'
import { Todo } from './Components/Todo'

function App() {
  const [todo, settodo] = useState([])
  const getdata = (data) => {
    settodo([...todo, data])
  }


  const mydelete = (i) => {
    todo.splice(i, 1);
    console.log(todo)

  }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todoinput getdata={getdata} />
      <Todo todo={todo} mydelete={mydelete} />
    </div>
  )
}

export default App

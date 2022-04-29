import './App.css'
import { Todo } from './Components/Todo'
import { Routes, Route } from "react-router-dom"
import { DetaildTodo } from './Components/DetailedTodo'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todo/:id" element={<DetaildTodo />}></Route>
      </Routes>
    </div>
  )
}

export default App

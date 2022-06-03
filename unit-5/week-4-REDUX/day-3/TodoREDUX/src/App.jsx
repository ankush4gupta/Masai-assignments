import './App.css'
import { Todo } from './Components/Todo'
import { Routes, Route } from "react-router-dom"
import { DetaildTodo } from './Components/DetailedTodo'
import { Login } from './Components/Login'
import { Navbar } from "./Components/Navbar"
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todo/:id" element={<DetaildTodo />}></Route>
      </Routes>
    </div>
  )
}

export default App

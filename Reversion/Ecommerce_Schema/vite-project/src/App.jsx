import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { User} from './components/User/User'
import { UserDetails} from "./components/User/UserDetails"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/userdetails/:id' element = {<UserDetails/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App

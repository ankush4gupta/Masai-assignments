import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Login } from './components/Login/Login';
import {Sidenav} from "./components/Sidebar/Sidenav"
import { UserProfile } from './components/Sidebar/UserProfile';
import { Tasktable } from './components/Sidebar/Tasktable';
import { Register } from './components/Registration/Register';

function App() {
 

  return (
    <div className="App">
      <Sidenav/>
      <Login/>
      <Register/>
      {/* <UserProfile/> */}
      {/* <Tasktable/> */}
    </div>
  )
}

export default App

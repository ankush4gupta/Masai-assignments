import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getcitydata } from './Redux/Cities/action'

// import {useSelector} from "react-redux";
// import {getcitydata} from "./Redux/Cities/action"

function App() {
  const city = useSelector((store) => store)
  console.log("city", city)
  useEffect(() => {
    
  }, [])
  getcitydata()

  return (
    <div className="App">
      hello
    </div>
  )
}

export default App

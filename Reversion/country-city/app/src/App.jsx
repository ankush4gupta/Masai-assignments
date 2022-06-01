import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { City } from './Components/City/City'
import { Country } from './Components/Country/Country'
import { Home } from "./Components/Home";
import { Navbar } from './Components/Navbar'
import { getcitydata } from "./Redux/Cities/action";
import { getcountrydata } from "./Redux/Countries/action"


// import {useSelector} from "react-redux";
// import {getcitydata} from "./Redux/Cities/action"

function App() {
  useEffect(() => {
    getcitydata();
    getcountrydata();

  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/add-city" element={<City />} />
        <Route path="/add-country" element={<Country />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home/> */}


    </div>
  )
}

export default App

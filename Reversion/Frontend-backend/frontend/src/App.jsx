import { useState } from 'react'
import { Product } from './components/Product';


import './App.css'
import { TableList } from './components/TableList';
import { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);
  const [productdata, getproductdata] = useState();
  const getdata = (data) => {
    getproductdata(data)

  }

  console.log(productdata, "getting data from product ")

  return (
    <div className="App">
      <Routes>
        <Route path="/product" element={<Product getdata={getdata} />}></Route>
        <Route path="/table" element={
          productdata ? <TableList productdata={productdata} /> : ""
        } ></Route>
      </Routes>

     
     
      
    </div>
  )
}

export default App

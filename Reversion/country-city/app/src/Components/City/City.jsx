// import * as React from 'react';
import { Input } from '@mui/material';
import { Button} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import "./city.css";


export const City = () => {
    const [city,setcity] = useState({
        name : "",
        population : "",
        country : ""
    });

    const country = useSelector((store)=>store);
    console.log(country,"country")

    return <div className='city-container'>
        <h1>Add City</h1>
        <Input onChange={(e)=>{
            setcity(...city,{name:e.target.value})
        }} placeholder="Enter city name" color="primary" className='input-margin' id="name" />
        <Input onChange={(e) => {
            setcity(...city, { population: e.target.value })
        }} placeholder="enter city's population" color='primary' className='input-margin' id="population"/>
        <select placeholder='select country name' onChange={(e) => {
            setcity(...city, { country: e.target.value })
        }}>
            <option value="">select country name</option>
            <option value="">2</option>
        </select>
        
        <Button variant="contained" className='input-margin'>Contained</Button>
    </div>


}

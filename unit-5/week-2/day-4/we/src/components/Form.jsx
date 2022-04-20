import { useState } from 'react';

export const Form = () => {
    let data = JSON.parse(localStorage.getItem("formdata")) || [];
    console.log(data)
    const [formdata, setFormData] = useState({
        Username: "",
        age: ""
    })
    const handlechange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formdata, [id]: value });
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        data.push(formdata)
        localStorage.setItem("formdata", JSON.stringify(data));
    }
    return (

        <form onSubmit={handlesubmit}>
            <input onChange={handlechange} type="text" placeholder="Enter Title" id="Username" />
            <input onChange={handlechange} type="Number" placeholder="age" id="age" />
            <input type="submit" name="" id="" value="Submit" />


        </form>
    )
} 
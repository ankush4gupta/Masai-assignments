import { useState } from "react"
import axios from 'axios';

export const Form = () => {
    let data = [];
    const [userdata, setUserdata] = useState({
        username: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        marital: ""

    })
    const handlechange = (e) => {
        const { value, name } = e.target;
        setUserdata({ ...userdata, [name]: value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
     
       
       await fetch(`http://localhost:8000/user`, {
            method: 'POST',
            body: JSON.stringify(userdata),
            headers: {
                "Content-Type": "application/json"
            }
        });
        // let data = await res.json();
        // console.log(data)



    }
    return (

        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" onChange={handlechange} name="username" id="" placeholder="Enter name" />
                <input type="number" onChange={handlechange} name="age" id="" placeholder="Enter age" />
                <textarea name="address" onChange={handlechange} id="" cols="30" rows="10" placeholder="Enter adress"></textarea>
                <select name="department" onChange={handlechange} id="">
                    <option value="Operation">Operation</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                </select>
                <input type="number" name="salary" onChange={handlechange} id="" placeholder="Enter Salary" />
                marital state:
                <div>
                    <input type="checkbox" onChange={handlechange} name="marital" value="Married" id="" /> Married
                    <input type="checkbox" onChange={handlechange} name="marital" value="Single" id="" /> Single
                </div>
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

/*

  <form action="" onClick={handlesubmit}>
                <input type="text" onChange={handlechange} name="username" id="" placeholder="Enter name" />
                <input type="number" onChange={handlechange} name="age" id="" placeholder="Enter age" />
                <textarea name="address" onChange={handlechange} id="" cols="30" rows="10" placeholder="Enter adress"></textarea>
                <select name="department" onChange={handlechange} id="">
                    <option value="Operation">Operation</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                </select>
                <input type="number" name="salary" onChange={handlechange} id="" placeholder="Enter Salary" />
                marital state:
                <div>
                    <input type="checkbox" onChange={handlechange} name="marital" value="Married" id="" /> Married
                    <input type="checkbox" onChange={handlechange} name="marital" value="Single" id="" /> Single
                </div>
                <input type="submit" value="Submit" />
            </form>
            
            
            
            */
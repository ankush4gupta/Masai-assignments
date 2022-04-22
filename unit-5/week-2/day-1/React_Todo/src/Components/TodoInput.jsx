import { useId, useState } from "react"
import "./todoinput.css";
import { v4 as uuidv4 } from 'uuid';

export const Todoinput = ({ getdata }) => {
    const [data, setdata] = useState({})
    const handlechange = (e) => {
        setdata({ title: e.target.value, id: uuidv4() })
    }


    return <div className="todoinput">
        <button onClick={() => {
            getdata(data)
        }}>+</button>
        <input onChange={
            handlechange
        } type="text" placeholder="Add to-do" />

    </div>
}
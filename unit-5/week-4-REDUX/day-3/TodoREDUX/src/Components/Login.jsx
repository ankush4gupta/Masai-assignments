import { useState } from "react";
import axios from "axios";

export const Login = () => {
    const [text, settext] = useState('')
    console.log(text)
    const logIn = ()=>{
        axios.post(`https://reqres.in/api/login`,{email:text,password : "admin"}).then((res)=>{
            localStorage.setItem("token", JSON.stringify(res.data))
        })
    }
    return <div>
        <input onChange={(e) => {
            settext(e.target.value)
        }} type="text" name="email" id="" placeholder="enter mail" />
        <button onClick={logIn}>Login</button>
    </div>
}
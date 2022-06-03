import { Input } from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { Heading } from '@chakra-ui/react'
import "./login.css"
import { logindata } from '../../Redux/Auth/action';

export const Login = () => {
    let myuser = useSelector((store)=>store);
    console.log(myuser,"login")
    const dispatch = useDispatch();
    const [user, setuser] = useState({
        username: "",
        password: ""
    })
    console.log(user)
    return <div className='loginContainer'>
        <Heading>Login</Heading>
        <form action="" onSubmit={(e)=>{
           e.preventDefault();
            dispatch(logindata(user))
        }}>


            <Input onChange={(e) => {
                setuser({ ...user, username: e.target.value })
            }} placeholder='Enter Email' variant='filled' type="text" isRequired color='black' errorBorderColor='red.300'/>
            <Input onChange={(e) => {
                setuser({ ...user, password: e.target.value })
            }} placeholder='Enter password' type="password" color='black' variant='filled' isRequired/>
            <Input placeholder='Basic usage' type="submit" />

        </form>
    </div>
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
export const UserDetails = ()=>{
    let {id}  =  useParams();
    const [singleuser, setsingleuser] = useState();
    useEffect(()=>{
        fetchsingleUser()
    },[])
    const fetchsingleUser = async()=>{
        let res = await fetch(`http://localhost:3008/users/${id}`);
        let result =  await res.json();
        setsingleuser(result)
    }
    console.log(singleuser)
    return <div>
        hello {id}
    </div>
}
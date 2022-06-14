import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./userdetail.css"
export const UserDetails = () => {
    let { id } = useParams();
    console.log(id, "id")
    const [singleuser, setsingleuser] = useState({});
    useEffect(() => {
        fetchsingleUser()
    }, [])
    const fetchsingleUser = async () => {
        let res = await fetch(`http://localhost:3008/users/${id}`);
        let result = await res.json();
        console.log(result, "result")
        setsingleuser(result)
    }
    console.log(singleuser)
    return <div>
        <p>Name : {singleuser.name}</p>
        <p>Email : {singleuser.email}</p>
        <p>Gender : {singleuser.gender}</p>
        <p>Mobile : {singleuser.mobile}</p>
        {
            singleuser.address !== undefined ? <div className="address-container">{
                singleuser.address.map((e) => {
                    return <div>

                        <h6>{e.type}</h6>
                        <p>House Number : {e.houseNo}</p>
                        <p>Land Mark : {e.landmark}</p>
                        <p>Street : {e.street}</p>
                        <p>City : {e.city}</p>
                        <p>Pincode : {e.pincode}</p>
                        <p>Country : {e.country}</p>
                    </div>
                })
            }</div> : ""
        }



    </div>
}


// *****************

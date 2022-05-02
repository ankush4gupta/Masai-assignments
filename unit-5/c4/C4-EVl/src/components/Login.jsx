import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login, userdata } from "../Redux/Auth/action";


export const Login = () => {
    const dispatch = useDispatch()
    const user2data = useSelector((store) => store.Auth.user)
    // console.log(user2data.role, "role")
    const [role, setrole] = useState("")
    const [text, settext] = useState("");
    useEffect(() => {
        getdata()
    }, [])

    // console.log(text)
    const getdata = async () => {
        let res = await fetch(`http://localhost:8080/users`)
        let data = await res.json()
        data = data.find((e) => {
            return e.username = text
        })
        dispatch(userdata(data))
        // setrole(user2data.role)




    }
    // console.log(role, "myrole")
    return (

        <div>
            <input onChange={(e) => {
                settext(e.target.value)
            }}
                className="username"
                type="text"
                name="username"
                placeholder="Enter Username"
            />
            <input
                className="password"
                type="password"
                name="password"
                placeholder="Enter password"
            />
            {/* On this button click make network req to find user with same username and password */}
            {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
            <button className="submit" onClick={() => {
                getdata()
                setTimeout(() => {

                    if (text === "admin") {
                        { console.log("admin to vgo ") }
                        // { console.log(user2data.role) }
                        <Navigate to="/orders" />
                        { console.log("admin to vgo  3 ") }
                    } else {
                        <Navigate to="/neworder" />
                    }
                }, 1000);
                dispatch(login(true))
            }}>Login</button>
        </div>
    );
};
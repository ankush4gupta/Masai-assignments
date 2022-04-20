import { useState, useContext } from "react";
import { useEffect } from "react"
import { AuthContext } from "../Context/AuthContext";
import { Profile, Portfolio } from "../StyleComponent/UserProfile";
const User = () => {
    const { isAuth } = useContext(AuthContext)

    const [user, setuser] = useState()

    const getdata = async () => {
        let res = await fetch(`https://reqres.in/api/users/2`);
        let data = await res.json();
        setuser(data.data)
    }
    !isAuth ? useEffect(() => {
        getdata()
    }, []) : null;
    console.log(user)
    // console.log(user.avatar)
    return <div>
        {
            user ? <Portfolio><Profile src={user.avatar} />
                <p>First Name : {user.first_name}</p>
                <p>Last Name : {user.last_name}</p>
                <p>Email : {user.email}</p></Portfolio> : null

        }


    </div>
}
export { User }
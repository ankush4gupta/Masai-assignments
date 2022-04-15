import { useState, useEffect } from "react"

const Formoutput = () => {
    const [user, setdata] = useState([])
    useEffect(() => {

        async function getdata() {
            let data = await fetch(`http://localhost:8000/user`).then((d) => d.json());
            setdata(data);
            console.log(data)
        }
        getdata()
    }, [])

    return (
        <div>
            {
                user.map((ele) => {
                    return (<ul>
                        <li>Name : {ele.username}</li>
                        <li>Age : {ele.age}</li>
                        <li>Adress : {ele.address}</li>
                        <li>Department : {ele.department}</li>
                        <li>Salary : {ele.salary}</li>
                        <li>Marital status : {ele.marital}</li>
                    </ul>


                    )




                })
            }
        </div>
    )
}

export { Formoutput }
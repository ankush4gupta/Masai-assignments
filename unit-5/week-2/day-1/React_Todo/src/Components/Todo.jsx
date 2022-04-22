import { useRef, useState } from "react"
import "./todo.css"
export const Todo = ({ todo, mydelete }) => {
    const [complete, setcomplete] = useState([]);
    const iscomplete = (i) => {
        setcomplete([...complete, i])
    }
    const deletecompt = (i) => {
        complete.splice(i, 1);
        setcomplete(complete)
    }
    console.log("toto", complete)




    return <div>
        {



            todo.map((e, i) => {
                return <div className="todo">
                    <input className="todoin" onChange={() => {
                        mydelete(i)
                        iscomplete(e)
                    }} type="checkbox" name="" id="" />
                    <p>{e.title}</p></div>
            })
        }
        <div>"Completed"</div>
        {
            complete ? complete.map((e, i) => {
                return <div className="complete"><p>{e.title}</p> <button className="comptbtn" onClick={() => {

                    deletecompt(i)
                }} >Delete</button></div>
            }) : null
        }



    </div>
}
import { Link, Navigate, useParams } from "react-router-dom";


import { addTodo, ToggleTodo, DeleteTodo } from "../REDUX/Todo/action";
import { useDispatch, useSelector } from "react-redux";


export const DetaildTodo = () => {
    const dispatch = useDispatch()
    const { id } = useParams();


    const todos = useSelector(({ todos }) => {
        return todos.todos.find((e) => {

            return e.id == id
        })
    });


    const handleStatus = (id) => {
        dispatch(ToggleTodo(id))

        // console.log("todos", todos)
    }
    // console.log(one[0].title, "one")
    return <div>
        <Link Link to="/">Home</Link>
        {!todos ? <h1>Deleted</h1> :
            <div>
                <h3>{todos.title}</h3>
                <button onClick={() => {
                    handleStatus(todos.id)
                }}>{!todos.status ? "Not completed" : "Completed"}</button>
                <button onClick={() => {
                    dispatch(DeleteTodo(todos.id))
                    alert("deleted")

                }}>Delete</button>
            </div>
        }




    </div>







}
//  const { todos } = useSelector(({ todos }) =>{todos.todos.filter(({todos})=>todos.id==id)});
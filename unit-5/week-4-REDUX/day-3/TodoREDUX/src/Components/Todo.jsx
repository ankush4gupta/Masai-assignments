import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from '../REDUX/Todo/action';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Todo = () => {
    useEffect(() => {
        getdata()
    }, [])
    const getdata = () => {
        axios.get(`http://localhost:8080/todos`).then((res) => {
            dispatch(addTodo(res.data))
        })
    }

    const dispatch = useDispatch()
    const { todos } = useSelector((store) => store.todos)
    const [text, settext] = useState()
    const handleAddTodo = () => {
        // dispatch(addTodo({ title: text, status: false }))
        axios.post("http://localhost:8080/todos", { title: text, status: false }).then(() => settext("")).then(getdata)


    }
    return <div>
        <h2>Todo</h2>
        <input type="text" value={text} name="" id="" onChange={(e) => settext(e.target.value)} />
        <button onClick={handleAddTodo}>Add todo</button>
        {
            todos.map((e) => {
                return <div key={e.id}><Link to={`/todo/${e.id}`}>{e.id}{" "}{e.title}</Link></div>
            })
        }
    </div>
}
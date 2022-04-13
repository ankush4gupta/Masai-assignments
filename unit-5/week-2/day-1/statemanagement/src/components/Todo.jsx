import { TodoInput } from "./TodoInput";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todoitems } from "./Todoitems";

function Todo() {

    const [list, setList] = useState([]);
    const getdata = (newdata) => {
        let payload = {
            task: newdata,
            status: false,
            id: uuidv4()

        }

        setList([...list, payload])
    }
    const toggle = (items) => {
        console.log(list)
        setList([...list.map(ele => ele.id == items ? { ...ele, status: !ele.status } : ele)])

    }

    return (

        <div className="container">
            <h1>Todo-List</h1>


            {
                list.map((ele) => <Todoitems items={ele} toggle={toggle} />)
            }
            <TodoInput getdata={getdata} />
        </div >
    )
}
export { Todo };




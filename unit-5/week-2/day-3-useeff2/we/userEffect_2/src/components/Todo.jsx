import { useEffect, useState } from "react"
import { Load } from "./Loading";

const Todo = () => {
    const [todo, settodo] = useState([])
    const [text, settext] = useState("");
    const [page, setpage] = useState(1)
    // const [loading, setload] = useState(true)
    useEffect(() => {
        console.log("mounted")
        getdata()
        return (() => {
            console.log("unmounted")
        })
    }, [page])
    async function getdata() {
        let res = await fetch(`http://localhost:8000/todo?_page=${page}&_limit=3`);
        let data = await res.json();
        settodo(data)

    }
    return <div>
        <div>
            <input name  = "title" type="text" onChange={(e) => {
                settext(e.target.value)
            }} />
            <button onClick={(e) => {
                let payload = {
                    title: text,
                    status: false

                }
                fetch('http://localhost:8000/todo', {
                    method: "Post",
                    headers: {
                        "content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                })
            

                getdata()


            }}>Submit</button>
        </div>
        <div>
            {
                todo.map(e => <div key={e.id}>{`${e.id} ${e.title}`}</div>)
            }
        </div>
        <div>
            <button onClick={() => setpage(page - 1)}>Left</button>
            <button onClick={() => setpage(page + 1)}>Right</button>
        </div>

    </div>
}
export { Todo }
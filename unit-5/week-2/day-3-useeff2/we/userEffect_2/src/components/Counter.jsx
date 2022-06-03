import { useEffect, useState } from "react"

const Counter = () => {
    const [counter, setcounter] = useState(10);

    useEffect(() => {
        let id = setInterval(() => {
            console.log("running")
            setcounter((pre) => {
                if (pre <= 0) {
                    clearInterval(id)
                }
                return pre - 1;
            })
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])
    return <div>
        <h1>Counter : {counter}</h1>
    </div>
}
export { Counter }
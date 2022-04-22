import { useEffect, useState } from "react"

export const Timer = ({ Initial, setInitial, end }) => {

    useEffect(() => {
        let id = setInterval(() => {
            console.log("running")
            setInitial((pre) => {
                if (pre == end.current) {
                    clearInterval(id)
                    return pre
                }
                return pre + 1;
            })
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])
    return <div>
        <div style={{
            color: "red",
            fontSize: "50px"
        }}>
            count : {Initial}

        </div>
        {
            Initial >= end.current ? <div>
                TimeUp
            </div> : null
        }

    </div>
}
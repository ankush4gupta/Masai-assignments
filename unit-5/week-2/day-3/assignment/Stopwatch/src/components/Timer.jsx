import { useEffect } from "react"

export const Timer=({start,end})=>{
    useEffect(()=>{
        setTimeout(()=>{
        
        },1000)
    })

    return (
        <div>
            hello{`${start}${end}`}
        </div>
    )
}
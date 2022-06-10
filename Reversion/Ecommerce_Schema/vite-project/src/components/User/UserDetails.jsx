import { useParams } from "react-router-dom"
export const UserDetails = ()=>{
    let {id}  =  useParams()
    return <div>
        hello {id}
    </div>
}
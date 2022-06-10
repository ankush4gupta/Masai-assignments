import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return <div>
        <Link to ="/">Home</Link>
        <Link to = "/User">User</Link>
        
        <Link to="/Product">Product</Link>
    </div>
}

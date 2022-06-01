import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return <div>
        <Link to="/">Home</Link>
        <Link to="/add-city">Add City</Link>
        <Link to="/add-country">Add Country</Link>
    </div>
}
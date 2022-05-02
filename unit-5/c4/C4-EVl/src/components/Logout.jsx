import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../Redux/Auth/action";
export const Logout = () => {
    const dispatch = useDispatch()
    dispatch(logout(false))




    // Logout component, just log user out and take him to `/` homepage

    // suggestion: if you are storing anyting in redux it's a good idea to
    // empty it before loggin out. eg: order

    return <div>
        < Navigate to="/"/>



    </div>;
};
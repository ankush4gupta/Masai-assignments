// /orders and /neworder are protected routes
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    // const dispatch = useDispatch();
    // const isAuth = useSelector((store) => {
    //     return store.Auth.Auth
    // })
    // console.log(isAuth.Auth)

    // if (isAuth) {
    //     return <Navigate to="/orders" />
    // }
    // return children;

};
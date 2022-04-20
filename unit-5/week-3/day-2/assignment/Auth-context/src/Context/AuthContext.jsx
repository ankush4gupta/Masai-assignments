
import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [isAuth, setisAuth] = useState(true);

    

    const toggleAuth = () => {
        setisAuth(!isAuth);

    }
    return <AuthContext.Provider value={{ toggleAuth, isAuth }}>{children}</AuthContext.Provider>
} 
import { Nav, Button, Logo } from "./StyleComponent/Navbar"
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { User } from "./Components/User";

function App() {
  const { toggleAuth
  } = useContext(AuthContext);
  const { isAuth } = useContext(AuthContext)
  console.log(isAuth)
  return (
    <>
      <Nav>
        <Logo>A</Logo>
        <Button onClick={() => {
          toggleAuth()
        }}>{isAuth ? "Login" : "Logout"}</Button>


      </Nav>
      {

        !isAuth ? <User /> : null
      }



    </>
  );
}

export default App

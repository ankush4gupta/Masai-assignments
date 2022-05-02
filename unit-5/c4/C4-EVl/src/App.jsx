import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";




function App() {
  const Dispatch = useDispatch()
  const isAuth = useSelector((store) => {
    return store.Auth.Auth
  })

  console.log(isAuth)
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {
          isAuth ? <Link className="nav-logout" to="/logout">
            Logout
          </Link> : <Link className="nav-login" to="/login">
            Login
          </Link>
        }
        {/* Show either login or logout below */}


      </div>

      <Routes>
        <Route path="/" element={<Home />}> </Route>

        <Route path="/login" element={
          <Login />

        }></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/orders" element={

          <Orders />

        }></Route>

        <Route path="/neworder" element={
          <ProtectedRoute>
            <NewOrder />
          </ProtectedRoute>
        }></Route>


        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
      </Routes>
    </div>
  );
}

export default App;
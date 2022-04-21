import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { Navbar } from "./components/Navbar";
import "./styles.css";
import { Userlist } from "./components/Userlist";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/user/:id" element={<Userlist />}></Route>
      </Routes>
    </div>
  );
}

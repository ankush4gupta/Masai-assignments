import logo from "./logo.svg"
import './App.css';


function App() {

  return (
    <div className="App">
      <Logo />
      <Link />
      <Btn />
    </div>
  );
}
function Logo() {
  return (

    <img src={logo} alt="" />

  )
}
function Link() {
  const arr = ["Services", "Projects", "About"]
  return (
    <div className="link">{

      arr.map((ele) => {
        console.log(ele);
        return <p>{ele}</p>
      })
    }
    </div >

  )
}
function Btn() {
  return (
    <div>
      <button className="mybtn">Contact</button>
    </div>
  )
}

export default App;

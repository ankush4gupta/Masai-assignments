import { Todo } from "./components/Todo"

import './App.css';

function App() {

  return (
    <div>
      <Todo />
    </div>
  )

}
// function First({ getname }) {
//   const something = "Ankush";

//   return getname(something)


// }
// function Second({ name }) {
//   console.log("hello", name)


// }


// const [name, setName] = useState("")
// const data = (value) => {
//   console.log("hello", value);
//   setName(value);
// }
// console.log(name)
// return (
//   <div className="App">
//     <h1><First getname={data} /></h1>
//     {/* <Second name={name} /> */}
//   </div>
// );

export default App;

// import Categories from "./components/Categories"
// import logo from "./logo.svg";
import { useState } from 'react';
import './App.css';
function App() {
  const [counter, setCounter] = useState(0);

  // const handleAdd = () => {
  //   if (counter >= 10) {
  //     return;
  //   }
  //   setCounter(counter + 1);
  // }

  // const handleSub = () => {
  //   if (counter <= 0) {
  //     return;
  //   }
  //     setCounter(counter - 1);
  // }
  const handleChnage = (num) => {

    setCounter(counter + num);
  }
  if (counter >= 10) {
    return <h4 className='max'>Counter Reach to its max Stage</h4>
  }
  // const [name, setName] = useState("Ankush");
  return (

    <div className="App">
      <h1>Counter :  {counter}</h1>
      <button onClick={() => handleChnage(1)}>Add 1</button>
      <button onClick={() => handleChnage(-1)}>Subtract 1</button>
      <div>Number is {counter % 2 == 0 ? "even" : "odd"}</div>
    </div>

  );
}

export default App;

// const navbar = [{ image: logo, name: "top" }, { image: logo, name: "bottom" }]
// {
//   navbar.map((ele) => <Categories image={ele.image} cate={ele.name} />)
// }
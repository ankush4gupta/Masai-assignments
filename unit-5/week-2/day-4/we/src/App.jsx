
// import logo from "./logo.svg";

import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Form } from "./components/Form";
function App() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);
  const setInterva = () => {
    counterRef.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000)
  }
  useEffect(() => {
    setInterva()
  }, [])


  return (

    <div className="App">
      <h3>Counter : {counter}</h3>
      <button onClick={() => {
        clearInterval(counterRef.current)
      }}>Pause</button>
      <button onClick={() => {
        clearInterval(counterRef.current)
        setCounter(0);

      }}>Reset</button>

      <button onClick={() => {
        setInterva()
      }}>Start</button>

    </div>

  );
}

export default App;

{/* <Form /> */ }
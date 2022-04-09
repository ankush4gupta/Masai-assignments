import Counter from "./components/Counter"
// import logo from "./logo.svg";
import { useState } from 'react';
import './App.css';
function App() {
  const [counter, setCounter] = useState(0);

  return (

    <div className="App">

      <Counter t={setCounter} prop={counter} />
      <div className={counter % 2 === 0 ? "even" : "odd"}>Number is {counter % 2 === 0 ? "even" : "odd"}</div>
    </div>

  );
}

export default App;


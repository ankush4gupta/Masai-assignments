import { useState } from 'react'
import { Timer } from "./components/Timer"
function App() {
  const [start, setstart] = useState(0);
  const [end, setend] = useState(30);

  return (
    <div className="App">

      <Timer start ={start} end = {end} />


    </div>
  )
}

export default App

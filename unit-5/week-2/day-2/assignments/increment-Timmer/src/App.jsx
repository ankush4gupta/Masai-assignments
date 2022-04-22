import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Timer } from './components/Timer'

function App() {
  const [Initial, setInitial] = useState(0)
  const end = useRef(10)


  return (
    <div className="App">
      <Timer Initial={Initial} setInitial={setInitial} end={end} />
    </div>
  )
}

export default App

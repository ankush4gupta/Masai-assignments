import { useState } from 'react'
// import { FromOutput } from "./components/Formoutput"
import { Form } from "./components/Form"
import { Formoutput } from './components/Formoutput'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <Form />
      <Formoutput/>
    </div>
  )
}

export default App

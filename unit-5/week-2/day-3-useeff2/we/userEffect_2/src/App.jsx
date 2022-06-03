import { useState } from 'react'
// import { Counter } from './components/Counter'
import { Todo } from './components/Todo'



function App() {
  const [show, setshow] = useState(true)

  return (
    <div className="App">

      {show ? <Todo /> : null}
      <button onClick={() => setshow(!show)}>{show ? "Show" : "Hide"}</button>

    </div>
  )
}

export default App

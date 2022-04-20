import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setcounter] = useState(0);
  const [age, setage] = useState(12);
  useEffect(() => {
    console.log("counter one ")

  }, [count])
  useEffect(() => {
    console.log("age  ")

  }, [age])



  return (
    <div className="App">
      <div>
        <div>{count}</div>
        <button onClick={() => {
          setcounter(count + 1)
        }}>Add 1</button>
      </div>
      <div>
        <div>{age}</div>
        <button onClick={() => {
          setage(age + 1)
        }}>Increase age by 1</button>

      </div>


    </div>
  )
}

export default App

/*

const [todo, setTodo] = useState([]);
useEffect(() => {

    async function getdata() {
      const data = await fetch(" http://localhost:8080/todo").then((d) => d.json());
      setTodo(data);
    }
    getdata()


  }, [])
  


  {todo.map(({ ele }) => {
        
      })
      }
  */
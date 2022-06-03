import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [limit,setlimit] = useState(30)
  const [load, setLoad] = useState(false)
  const [data, setData] = useState([])
  useEffect(()=>{
    myfetch()
  },[limit])
  const myfetch = async()=>{
    let res = await fetch(`https://picsum.photos/v2/list?page=2&limit=${limit}`);
    let result =  await res.json();
    setData(result)
  }

  const onfetch = () => {
    setTimeout(() => {
      setlimit(limit+10)
      console.log(limit,"limit")
      setLoad(false)
      // myfetch()
    }, 1000)
  }


 
  console.log(data)

  const scroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 50) {
      setLoad(true)
      onfetch()
      // setlimit(limit+10)
    }
  }
  console.log(limit)

  return (
    <div className="App">
      {limit >= 101 ? <h1>Data Limit Finished Please Refresh page</h1> : <div onScroll={(e) => scroll(e)} id='container'>
        {data.map((e, i) => {
          return <div className='sub'>
            <p>{e.author}</p>
            <img src={e.download_url} alt="" />
          </div>
        })}
        {load ? <h1>Loading...</h1> : null}
      </div>}
      
    </div>
  )
}

export default App
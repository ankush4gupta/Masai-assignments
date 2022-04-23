import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import { RestaurantDetails } from './components/RestaurantDetails'

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getdata();
  }, [])
  const getdata = async () => {
    let data = await axios.get(`http://localhost:8080/restaurant`);
    setdata(data.data)
  }

  const [cost, setcost] = useState(false);
  const [rating, setrating] = useState(0);
  const [pay, setpay] = useState({
    method: "all"
  })
  const ratingfilter = (num) => {
    setrating(num)
  }
  // console.log(data)
  return (
    <div className="App">

      <h1>Restaurant</h1>
      <div>
        Filter : <button onClick={() => {
          ratingfilter(1)
        }}>1 star</button>
        <button onClick={() => {
          ratingfilter(2)
        }}>2 stars</button>
        <button onClick={() => {
          ratingfilter(3)
        }}>3 stars</button>
        <button onClick={() => {
          ratingfilter(4)
        }}>4 stars</button>
      </div>
      <div>
        Sorting : <button onClick={() => {
          setcost(true)
        }}>High to Low</button>
        <button onClick={() => {
          setcost(false)
        }}>Low to High</button>
      </div>
      <div>
        Payment Sorting : <button onClick={() => {
          setpay({
            method: "cash"
          })
        }}>Cash Only</button>
        <button onClick={() => {
          setpay({
            method: "cash"
          })
        }}>Card Only</button>
        <button onClick={() => {
          setpay({})
        }}>All</button>
      </div>
      <div className='cont'>
        {
          data.filter((data) => {
           
            if (pay.method == "card") {

              return data.rating >= rating && data.payment_methods.card === true;
            } else if (pay.method = "cash") {
              return data.rating >= rating && data.payment_methods.cash === true;
            } else {
              return data.rating >= rating
            }


          }).sort((a, b) => {
            if (cost) {
              return b.twoCost - a.twoCost

            }
            return a.twoCost - b.twoCost
          }).map((e) => {

            return <RestaurantDetails e={e} />
          })
        }
      </div>

    </div>
  )
}

export default App

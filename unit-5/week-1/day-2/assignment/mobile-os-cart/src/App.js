
import './App.css';


let arr1 = [{
  t1: "Mobile Operating System",
  data: [{ t: "Android", style: "dics" },
  { t: "Blackberry", style: "dics" },
  { t: "iPhone", style: "dics" },
  { t: "Window Phones", style: "dics" }
  ]
},
{
  t1: "Mobile Manufactures",
  data: [{ t: "Sumsung", style: "square" },
  { t: "HTC", style: "square" },
  { t: "MicroMax", style: "dics" },
  { t: "Apple", style: "circle" }
  ]
}];
function App() {
  return (
    <div className="App">

      {
        arr1.map((elem) => {
          console.log(elem)
          return <Cart skill={elem} />
        })
      }

    </div>
  );
}
function Cart({ skill }) {

  return (
    <div>
      <h3>{skill.t1}</h3>


      <ul>
        {
          skill.data.map((tt) => {
            return <li className={tt.style}>{tt.t}</li>
          })

        }

      </ul>
    </div>)
}


export default App;

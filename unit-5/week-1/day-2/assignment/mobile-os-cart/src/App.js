
import './App.css';


let arr1 = [{ t1: "Mobile Operating System", t2: "Android", t3: "Blackberry", t4: "iPhone", t5: "Window Phones" }, { t1: "Mobile Manufactures", t2: "Sumsung", t3: "HTC", t4: "MicroMax", t5: "Apple" }]
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
        <li>{skill.t2}</li>
        <li>{skill.t3}</li>
        <li>{skill.t4}</li>
        <li>{skill.t5} </li>

      </ul>
    </div>)
}


export default App;

import "./counter.css"
function Counter({ t, prop }) {

    const handleChnage = (num) => {

        t(prop + num);

    }
    const double = (num) => {
        t(prop * num);
    }

    return (
        <div>
            <h1 className={prop % 2 === 0 ? "even" : "odd"}>Counter :  {prop}</h1>
            <button onClick={() => handleChnage(1)}>Add 1</button>
            <button onClick={() => handleChnage(-1)}>Subtract 1</button>
            <button onClick={() => double(2)}>Double </button>

        </div>
    )
}
export default Counter;
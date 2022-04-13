import { useState } from "react";

export const Inventry = () => {
    const [books, setInv] = useState(10);
    const [pen, setpen] = useState(10);
    const [Inkpen, setInkpen] = useState(10);
    const [notebooks, setNotebooks] = useState(10);



    const handlechnage = (num, value, setValue) => {

        setValue(value + num);

    }
    // Create add and remove functions here that changes the
    // state.
    return (
        <div
            style={{
                border: "1px solid black",
                borderRadius: "3px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                width: "400px",
            }}
        >
            <div className="items">
                <span>Books: </span>
                <button className="circlularButton" onClick={() => handlechnage(1, books, setInv)}>+</button>
                <button className="circlularButton" onClick={() => handlechnage(-1, books, setInv)}>-</button>
                <span>{books}</span>
            </div>
            <div className="items">
                <span>Notebooks: </span>
                <button className="circlularButton" onClick={() => handlechnage(1, notebooks, setNotebooks)}>+</button>
                <button className="circlularButton" onClick={() => handlechnage(-1, notebooks, setNotebooks)}>-</button>
                <span>{notebooks}</span>
            </div>
            <div className="items">
                <span>Pen: </span>
                <button className="circlularButton" onClick={() => handlechnage(1, pen, setpen)}>+</button>
                <button className="circlularButton" onClick={() => handlechnage(-1, pen, setpen)}>-</button>
                <span>{pen}</span>
            </div>
            <div className="items">
                <span>Ink Pens: </span>
                <button className="circlularButton" onClick={() => handlechnage(1, Inkpen, setInkpen)}>+</button>
                <button className="circlularButton" onClick={() => handlechnage(-1, Inkpen, setInkpen)}>-</button>
                <span>{Inkpen}</span>
            </div>
            {/*calculate total and show it*/}
            total: {books + pen + Inkpen + notebooks}
        </div>
    );
};
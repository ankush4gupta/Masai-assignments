import { useState } from "react";
import "./component.css";

export const TodoInput = ({ getdata }) => {
    const [text, settext] = useState("")

    return (
        <div className="main">
            <input className="title" onChange={(e) => {
                settext(e.target.value);
            }} type="text" name="" id="" placeholder="Enter a Value" required/>
            <button className="addbtn" onClick={() => {
                getdata(text)
            }}>+</button>
        </div>
    )
}

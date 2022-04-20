import header from "./header";
import React from "react";
import reactDom from "react-dom";
import "./header.css";
import "./index.css";
import logo from "./myimg.png";

// let arr = ["list1", "list2", "list3", "list4"]
document.querySelector(".header").innerHTML = header();
document.querySelector("#logo_img").src = logo;

// const li1 = React.createElement("li", {}, "list1");
// const li2 = React.createElement("li", {}, "list2");
// const li3 = React.createElement("li", {}, "list3");
// const li4 = React.createElement("li", {}, "list4");
// const ol= React.createElement("ol", {}, li1,li2,li3,li4)
// const div = React.createElement("h1", { className: "myh1" }, ol);

reactDom.render(
    // "hello world",
    <div>
        <h1>hello</h1>
        <table border="1px">
            <tr>
                <td>1 one</td>
            </tr>
        </table>
        <img src="http://127.0.0.1:5500/build/images/myimg.36483e6099e0305e448da3dd3b1fc449.png" />
    </div>,
    document.querySelector(".root")

)
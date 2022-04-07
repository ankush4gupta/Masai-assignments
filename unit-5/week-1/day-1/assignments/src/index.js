import header from "./header";
import "./header.css";
import "./index.css";
import logo from "./myimg.png";

document.querySelector(".header").innerHTML = header();
document.querySelector("#logo_img").src = logo;
let data = JSON.parse(localStorage.getItem("todo_task")) || [];
document.querySelector("#myform").addEventListener("submit", create_todo);
function create_todo(event) {

    event.preventDefault();
    let task = document.querySelector("#task").value;
    data.push(task)
    localStorage.setItem("todo_task", JSON.stringify(data));
    display_list(data)
}
display_list(data)
function display_list(data) {
    document.querySelector("#mytbody").innerHTML = " "
    data.map((ele, index) => {
        console.log(ele)
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");

        let td3 = document.createElement("td");
        td3.innerHTML = "Delete"
        td3.onclick = () => {
            mydelete(index)
        }


        td1.innerHTML = ele;
        tr.append(td1, td3);
        document.querySelector("#mytbody").append(tr);
    })
}
function mydelete(index) {
    data.splice(index, 1);
    localStorage.setItem("todo_task", JSON.stringify(data));
    display_list(data);
}
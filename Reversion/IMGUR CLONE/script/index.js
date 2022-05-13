let location1 = document.querySelector(".container1");
let location2 = document.querySelector(".container2");
let location3 = document.querySelector(".container3");
let location4 = document.querySelector(".container4");

async function getdata() {
    let res = await fetch(`https://picsum.photos/v2/list?page=2&limit=100`);
    let data = await res.json();
    let arr1 = data.slice(0, 25);
    let arr2 = data.slice(25, 50);
    let arr3 = data.slice(50, 75);
    let arr4 = data.splice(75, 99)
    display(arr1, location1)
    display(arr2, location2)
    display(arr3, location3)
    display(arr4, location4)

}
getdata()
function display(data, location) {
    console.log(data)
    data.map(({ author
        , download_url }) => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = download_url;
        let h3 = document.createElement('h3');
        h3.innerHTML = author
        div.append(img, h3);
        location.append(div)

    })

}
window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 10) {
        document.getElementById("footer").style.display = "none";
        document.getElementById("footer").style.transition = "0.5s"
        //  nav2
        document.querySelector(".nav-container2").style.display = "block"
        document.querySelector(".nav-container").style.display = "none"
        document.querySelector(".nav-container").style.transition = "0.5s"
        document.querySelector(".nav-container2").style.transition = "0.5s"

       

    } else {
        document.getElementById("footer").style.display = "flex"
        //  nav2
        document.querySelector(".nav-container2").style.display = "none"
        document.querySelector(".nav-container").style.display = "block"
        document.querySelector(".nav-container2").style.transition = "2s"
        // document.querySelector(".nav-container").style.transition = "2s"
       
    }
}

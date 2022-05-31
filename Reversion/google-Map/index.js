
// let mylatlng = new google.maps.LatLng(20.5937, 78.9629)

// let mapOptions = {
//     center: mylatlng,
//     zoom: 8,
//     mapTypeId : google.maps.MapTypeId.ROADMAP
// };

// let map = new 




// { lat: 20.5937, lng: 78.9629 }

function initMap() {
    let arr = [{ id: 1, m: 1, position: { lat: 20.5937, lng: 78.9629 }, title: "india", },
    { id: 2, m: 2, position: { lat: 26.8467, lng: 80.9462, }, title: "Lucknow", },
        { id: 3, m: 3, position: { lat: 28.8467, lng: 70.9462, }, title: "Unknow", },
        { id: 4, m: 4, position: { lat: 29.8467, lng: 90.9462, }, title: "Unknown", }]
    let map;

    let mapOption = {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 8
    }
    map = new google.maps.Map(document.getElementById("map"), mapOption);

    arr.map((e) => {
        e.id = {
            position: e.position,
            title: e.title,

        }
        e.m = new google.maps.Marker(e.id)
        console.log(e.m)
        e.m.setMap(map)
    })
    // let markerOptions= {
    //     position: { lat: 26.8467, lng: 80.9462 },
    //     title: "Lucknow",
    //     map :map
    // }

    //  let marker = new google.maps.Marker(markerOptions)


    // marker.setMap(map);
}


// window.initMap = initMap;
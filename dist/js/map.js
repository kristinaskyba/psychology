"use strict";

function initMap() {
    let options = {
        zoom:13,
        center: { lat: 40.659998, lng: -73.878293} //Coordinates of New York
    }
    let map = new google.maps.Map(document.getElementById('map'), options);
    let marker = new google.maps.Marker({
        position:{lat: 40.678721, lng: -73.901128 }, // Brooklyn Coordinates
        map:map, //Map that we need to add
        icon:'img/Background.png',
    //icon:'img/custom_marker.png',
    zoom:2,
        // adding custom icons (Here I used a Flash logo marker)
        draggarble: false// If set to true you can drag the marker
});
    let information = new google.maps.InfoWindow({
        content: '<h4>Monticello Co.,Ltd</h4>'
});
    marker.addListener('click', function() {
        information.open(map, marker);
    });
}

// let map;
//
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//     });
// }
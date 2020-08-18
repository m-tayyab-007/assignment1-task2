$(document).ready(function () {
    console.log('Ready');

    var mymap = L.map('mapid').setView([-37.7, 145], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    L.marker([-37.7, 145]).addTo(mymap)
        .bindPopup('Your Current<br>Location')
        .openPopup();

    L.marker([-37.7, 144.5]).addTo(mymap)
        .bindPopup('Driver');
        

    L.marker([-37.8, 144.5]).addTo(mymap)
        .bindPopup('Driver');
        

})
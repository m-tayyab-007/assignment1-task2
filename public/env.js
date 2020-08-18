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





    $('#submit').click(() => {
        L.Routing.control({
            waypoints: [
                L.latLng(-37.7, 145),
                L.latLng(-37.7, 144.5)
            ]
        }).addTo(mymap);

            // The data/time we want to countdown to
    var countDownDate = new Date("Aug 19, 2020 02:30:01").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function () {

        var now = new Date().getTime();
        var timeleft = countDownDate - now;

        // Calculating the days, hours, minutes and seconds left
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        // Result is output to the specific element
        document.getElementById("days").innerHTML = days + "d "
        document.getElementById("hours").innerHTML = hours + "h "
        document.getElementById("mins").innerHTML = minutes + "m "
        document.getElementById("secs").innerHTML = seconds + "s "

        // Display the message when countdown is over
        if (timeleft < 0) {
            clearInterval(myfunc);
            document.getElementById("days").innerHTML = ""
            document.getElementById("hours").innerHTML = ""
            document.getElementById("mins").innerHTML = ""
            document.getElementById("secs").innerHTML = ""
            document.getElementById("end").innerHTML = "TIME UP!!";
        }
    }, 1000);
    })






})
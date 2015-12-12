var c = document.getElementById("headerCanvas");
var ctx = c.getContext("2d");
var sunImg = document.getElementById("sun");
var moonImg = document.getElementById("moon");
var width = c.width - 100;
var interval;


function moveSun(newNum, hour) {
    if (hour > 5 && hour < 17) {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(sunImg, newNum, 5, 100, 100);
        c.style.backgroundImage = "url('Images/daySky2.jpg')";
    } else {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(moonImg, newNum, 5, 100, 100);
        c.style.backgroundImage = "url('Images/night.jpg')";

    }
}

interval = setInterval(function () {

    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var interpolateHour = (hour / 24) * 100;
    var interpolateMinutes = (minutes / 60);
    var interpolateSeconds = (seconds / 3600);

    //    console.log(interpolateHour + ", " + interpolateMinutes + ", " + interpolateSeconds);

    var num = getTween(0, width, interpolateHour);
    num += getTween(0, width, interpolateMinutes);
    num += getTween(0, width, interpolateSeconds);
    moveSun(num, hour);
}, 1);


function stopInterval() {
    clearInterval(interval);
}

function getTween(b, e, i) {
    return b + ((i / 100) * (e - b));
}


$(document).ready(function () {
    $(document.getElementById('sun')).hide();
    $(document.getElementById('moon')).hide();
});

//
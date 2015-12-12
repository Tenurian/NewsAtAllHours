var c = document.getElementById("headerCanvas");
var ctx = c.getContext("2d");
var sunImg = document.getElementById("sun");
var moonImg = document.getElementById("moon");


ctx.drawImage(sunImg, 0, 5, 100, 100);


function lerp(x1, x2, scalar) {
    var vx = (1 - scalar) * x1 + scalar * x2;
    return Math.floor(vx);
}

$(document).ready(function () {
    $(document.getElementById('sun')).hide();
    $(document.getElementById('moon')).hide();
});
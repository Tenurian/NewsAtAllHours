var d = new Date();
var pacificTimeZone = 0;
var mountainTimeZone = 0;
var centralTimeZone = 0;
var easternTimeZone = 0;
var alaskanTimeZone = 0;
var hawaiianTimeZone = 0;

var dateArea = document.getElementById("date1");
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

function getTimeZones() {
    d = new Date();

    hawaiianTimeZone = "Hawaii-Aleutian: " + converter(d.getHours(), -3) + ":" + d.getMinutes() + ":" + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    alaskanTimeZone = "Alaska: " + converter(d.getHours(), -2) + ":" + d.getMinutes() + ":" + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    pacificTimeZone = "Pacific: " + converter(d.getHours(), -1) + ":" + d.getMinutes() + ":" + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    mountainTimeZone = "Mountain: " + converter(d.getHours(), 0) + ":" + d.getMinutes() + ":" + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    centralTimeZone = "Central: " + converter(d.getHours(), 1) + ":" + d.getMinutes() + ":" + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    easternTimeZone = "Eastern: " + converter(d.getHours(), 2) + ":" + d.getMinutes() + ":" + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    dateArea.innerHTML = "<br><br><br>" + "TimeZones " + "<br><br><br>" + hawaiianTimeZone + "<br><br><br>" + alaskanTimeZone + "<br><br><br>" + pacificTimeZone + "<br><br><br>" + mountainTimeZone + "<br><br><br>" + centralTimeZone + "<br><br><br>" + easternTimeZone;;
}

function converter(hours, modifier) {
    var time = hours + modifier;
    if (time < 0) {
        time = time + 23;
    } else if (time > 23) {
        time = time - 23;
    }

    return time;
}


setInterval(getTimeZones, 1);
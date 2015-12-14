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

    hawaiianTimeZone = "Hawaii-Aleutian: " + (d.getHours() - 3) + ":" + d.getMinutes() + ":" + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    alaskanTimeZone = "Alaska: " + (d.getHours() - 2) + ": " + d.getMinutes() + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    pacificTimeZone = "Pacific: " + (d.getHours() - 1) + ": " + d.getMinutes() + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    mountainTimeZone = "Mountain: " + d.getHours() + ": " + d.getMinutes() + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    centralTimeZone = "Central: " + (d.getHours() + 1) + ": " + d.getMinutes() + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    easternTimeZone = "Eastern: " + (d.getHours() + 2) + ": " + d.getMinutes() + d.getSeconds() + "  " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

    dateArea.innerHTML = hawaiianTimeZone;
}


setInterval(getTimeZones, 1);
var d = new Date();
var pacificTimeZone = 0;
var mountainTimeZone = 0;
var centralTimeZone = 0;
var easternTimeZone = 0;
var alaskanTimeZone = 0;
var hawaiianTimeZone = 0;

var dateArea = document.getElementById("date1");

setInterval(getTimeZones, 1);
//d.toLocaleTimeString

function getTimeZones() {

    hawaiianTimeZone = "Hawaii-Aleutian: " + (d.getHours() - 3) + ":" + d.getMinutes() + ":" + d.getSeconds() + "  " + d.getDay() + ", " + d.getMonth() + " " + d.getDay() + ", " + d.getFullYear();

    alaskanTimeZone = "Alaska: " + (d.getHours() - 2) + ": " + d.getMinutes() + d.getSeconds() + "  " + d.getDay() + ", " + d.getMonth() + " " + d.getDay() + ", " + d.getFullYear();

    pacificTimeZone = "Pacific: " + (d.getHours() - 1) + ": " + d.getMinutes() + d.getSeconds() + "  " + d.getDay() + ", " + d.getMonth() + " " + d.getDay() + ", " + d.getFullYear();

    mountainTimeZoneTimeZone = "Mountain: " + d.getHours() + ": " + d.getMinutes() + d.getSeconds() + "  " + d.getDay() + ", " + d.getMonth() + " " + d.getDay() + ", " + d.getFullYear();

    centralTimeZoneTimeZone = "Central: " + (d.getHours() + 1) + ": " + d.getMinutes() + d.getSeconds() + "  " + d.getDay() + ", " + d.getMonth() + " " + d.getDay() + ", " + d.getFullYear();

    easternTimeZone = "Eastern: " + (d.getHours() + 2) + ": " + d.getMinutes() + d.getSeconds() + "  " + d.getDay() + ", " + d.getMonth() + " " + d.getDay() + ", " + d.getFullYear();

    dateArea.innerHTML = hawaiianTimeZone;
}
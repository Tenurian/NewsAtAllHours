var city = localStorage.getItem("city"),
    loc,
    console = window.console,
    weatherinfo = [["", "", "", "", "", ""],
                   ["", "", "", "", "", ""],
                   ["", "", "", "", "", ""],
                   ["", "", "", "", "", ""],
                   ["", "", "", "", "", ""]],
    weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    viewableContent,
    placeHolder = 0;

if (city === null || city === "") {
    city = "Salt+Lake+City";
}

console.log(city);

var someVarName = "value";
localStorage.setItem("someVarName", someVarName);

var someVarName = localStorage.getItem("someVarName");

function postData(weatherData) {
    //    console.log(weatherData);
    var papername = weatherData.list[0].weather[0].description,
        date = new Date(),
        i,
        deg = "°",
        dasheds = "—",
        daydiv,
        datediv,
        imgdiv;
    document.getElementById("location").innerHTML = "Weather forecast for " + weatherData.city.name + ", " + weatherData.city.country;
    papername = papername.replace(/ /g, "_");
    document.getElementById('weatherPanel').style.backgroundImage = "url('http://www.tenurian.com/images/" + papername + ".jpg')";

    for (i = 0; i < 5; i += 1) {
        weatherinfo[i][0] = weekdays[parseInt(date.getDay(), 10) + i] + ", " + (date.getMonth() + 1) + "/" + (parseInt(date.getDate(), 10) + i);
        weatherinfo[i][1] = "http://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png";
        weatherinfo[i][2] = "High: " + weatherData.list[i].temp.max + "° F";
        weatherinfo[i][3] = "Low: " + weatherData.list[i].temp.min + "° F";
        weatherinfo[i][4] = "Average: " + weatherData.list[i].temp.day + "° F";
        weatherinfo[i][5] = weatherData.list[i].weather[0].main;
        daydiv = "day" + (i + 1);
        datediv = document.getElementById(daydiv).getElementsByClassName("date")[0];
        imgdiv = document.getElementById(daydiv).getElementsByClassName("image")[0];
        datediv.innerHTML = weatherinfo[i][0];
        imgdiv.innerHTML = "<img class='imagine' src='" + weatherinfo[i][1] + "' />";
        imgdiv.getElementsByClassName("imagine")[0].style.width = "75px";
        imgdiv.getElementsByClassName("imagine")[0].style.height = "auto";
        imgdiv.style.margin = "0px, auto";
        document.getElementById(daydiv).getElementsByClassName("info")[0].innerHTML = "<p>" + weatherinfo[i][2] + "</p> <p>" + weatherinfo[i][3] + "</p> <p>" + weatherinfo[i][4] + "</p> <p>" + weatherinfo[i][5] + "</p>";
    }
}

function locupdate() {
    city = $(document.getElementById("locationfield")).val();
    city = city.replace(/ /g, "+");
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial&appid=6fd13b66451e95bb3011022e7a333516", function (data) {
        postData(data);
    });
    localStorage.setItem("city", city);
    $(document.getElementById("locationfield")).val("");
}

function updateLocation() {
    city = prompt("Enter City Name:");
    city = city.replace(/ /g, "+");
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial&appid=6fd13b66451e95bb3011022e7a333516", function (data) {
        postData(data);
    });
    localStorage.setItem("city", city);

}

$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial&appid=6fd13b66451e95bb3011022e7a333516", function (data) {
    postData(data);
});
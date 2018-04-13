// var url = `http://api.wunderground.com/api/5b9632e5da256228/geolookup/conditions/q/NY/New_York.json`;

var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/5b9632e5da256228/geolookup/conditions/q/NY/New_York.json", false);
weather.send(null);

var r = JSON.parse(weather.response);
var display = "Current location:" + r.current_observation.display_location.full + "<br />";
var temp = r.current_observation.temperature_string + "<br />";
var wind = r.current_observation.wind_string + "<br />";

document.getElementById("weather").innerHTML = weather;
document.getElementById("temp").innerHTML = temp;
document.getElementById("wind").innerHTML = wind;
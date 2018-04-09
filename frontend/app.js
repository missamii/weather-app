document.addEventListener("DOMContentLoaded", function(event) { // ready function
  console.log("js loaded"); // DOM check



//get the elements
// var main   = document.querySelector("#weather");
// var button = document.querySelector("#searchBtn");

/* Submit button */
  searchBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    console.log(search.value);
  });

// heart beat ajax
  // $.ajax({
  //   url: "http://api.wunderground.com/api/f09a534422345c3f/conditions/q/NY/New_York.json ",
  //   dataType: "jsonp",
  //   jsonpCallback: 'callback'
  // }).done(function(d) {

// HTTP styled heart
var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/f09a534422345c3f/conditions/q/NY/New_York.json",false);
weather.send(null);

// appending API info to the DOM
var read    = JSON.parse(weather.response);
var display = "Current location: " + read.current_observation.display_location.full + "<br />";
var temp    = read.current_observation.temperature_string + "<br />";
var wind    = read.current_observation.wind_string + "<br />";
document.getElementById("#weather").innerHTML = display;
document.getElementById("temp").innerHTML     = temp;
document.getElementById("wind").innerHTML     = wind;


});// end ready function

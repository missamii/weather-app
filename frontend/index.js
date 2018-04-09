document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM Check/Ready!'); // ready function

  let request = require('request');

  let city = 'New_York';
  let url = `http://api.wunderground.com/api/Your_Key/conditions/q/CA/New_York.json`;

  request(url, function(err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
  });

}); // end ready function
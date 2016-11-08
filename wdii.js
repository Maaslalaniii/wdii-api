// Cheerio + Tiny-req
const cheerio = require('cheerio-req');

// Function getDay(cb) to get and return data.
module.exports.getDay = (send) => {
  
  let days = [];
  
  // Attempt to connect and scrape html.
  cheerio('http://opan.cf/day', (err, $) => {
    
    // Handle error should there be one.
    if (err) {
      send('Could not retrieve data.');
    }
    
    // Loop through to find three days. [yesterday, today, tomorrow]
    for (let i = 0; i < 3; i++) {
      
      // Create a day object with the date, day, and events properties.
      let day = {
        date: $('.day h3').eq(i).html(),
        day: $('.day h1').eq(i).html(),
        events: $('.day p').eq(i).html().split('<br>')
      };
      
      // Insert day object into the corresponding position.
      days[i] = day;
    }

    // Send JSON data to the server through the callback.
    send(JSON.stringify(days));
  });
}

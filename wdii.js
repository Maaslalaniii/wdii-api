const cheerio = require('cheerio-req')

module.exports.getDay = (send) => {

  let days = []

  cheerio('http://opan.cf/day', (err, $) => {
    if (err) {
      send('Could not retrieve data.')
    }
    
    for (let i = 0; i < 3; i++) {
      
      let day = {
        date: $('.day h3').eq(i).html(),
        day: $('.day h1').eq(i).html(),
        events: $('.day p').eq(i).html().split('<br>')
      }
      
      days[i] = day

    }

    send(JSON.stringify(days))

  })
}
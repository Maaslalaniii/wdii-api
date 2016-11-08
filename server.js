// Import the create module, to call the function.
const wdii = require('./wdii');
const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  
  // Call the function with a callback which displays the returned data.
  wdii.getDay((data) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(data);
  });
}

const server = http.createServer(requestHandler);

server.listen(port, '0.0.0.0');


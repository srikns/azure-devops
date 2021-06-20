const bodyParser = require('body-parser');
const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
     parsed = JSON.parse(body);
      console.log('event type:', parsed.eventType);
      console.log('detail Message:', parsed.detailedMessage.text);
      console.log('status:', parsed.resource.status);
    });
    response.statusCode = 200;
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(3000,() => console.log('Running on port 3000'));

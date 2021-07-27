const http = require('http')
const fs = require('fs')

// how to send an html file
// to the response
// no error handling, only basic code is given here
const server = http.createServer((req, res) => {
  url = req.url
  console.log(url)
  // if it's the home page, send the html
  if (url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    // we are reading the file and writing it to the response stream
    fs.readFile('video.html', function(error, content) {
      res.end(content, 'utf-8');
    });
  }
  else if(url === '/video') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'video/mp4')
    // we are reading the file and writing it to the response stream
    fs.readFile('./future.mp4', function(error, content) {
      res.end(content, 'utf-8');
    });
  }
  else if(url === '/image') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/jpeg')
    // we are reading the file and writing it to the response stream
    fs.readFile('./CC.jpg', function(error, content) {
      res.end(content, 'utf-8');
    });
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found', 'utf-8');
  }
});

const port = 3000
server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
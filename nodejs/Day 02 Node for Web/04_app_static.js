const http = require('http')
const fs = require('fs')

// how to send a static html file to the response
// only skeletal code is given here
// more error handling is needed
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'video/mp4')
  // reading the file and writing it to the response stream
  fs.readFile('future.mp4', function(error, content) {
    res.end(content, 'utf-8');
  });
})

const port = 3000
server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})





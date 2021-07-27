// we require the HTTP module
// which comes with NodeJS
const http = require('http')

// port can be read from a config file too
const port = 3000 
const server = http.createServer((req, res) => {
  // status code for successful response
  res.statusCode = 200
  // the response header is set
  res.setHeader('Content-Type', 'text/html')
  // response body is set
  res.end('<h1>Hello World! This is from Node.js</h1>')
})

// we can listen on a port of our choice
// the server is on until we terminate the process
server.listen(port, () => {
  console.log(`Server running at port ${port}`)
});



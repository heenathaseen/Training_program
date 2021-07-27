const http = require('http')
// reading the request body
const server = http.createServer((req, res) => {
  let data = ''
  // the request is a stream which is read in chunks
  req.on('data', chunk => {
    console.log(`Data chunk available: ${chunk}`)
    data += chunk
  })
  req.on('end', () => {
    // status code for successful response
    res.statusCode = 200
    // the response header is set
    res.setHeader('Content-Type', 'text/html')
    //res.setHeader('Content-Type', 'application/json')
    // the body
    res.end(`<h1>The text you sent is ${data}</h1>`)
    //res.end(JSON.stringify({reqData: data}))
  })
})

const port = 3000
server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
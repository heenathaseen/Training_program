const express = require('express')
const app = express()

app.use(testMiddleware)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/users', [userMiddleware, (req, res) => {
    res.send('Users Page')
}])

function testMiddleware(req, res, next) {
    console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
    next()
}

function userMiddleware(req, res, next) {
    console.log(`${new Date().toISOString()}: Users url: ${req.originalUrl}`)
    next()
}

app.listen(3000)
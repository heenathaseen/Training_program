// express is sufficient, http is not required
const path = require('path')
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

// the first path
app.use('/index', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

// if no path is specified
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
});

app.listen(4000);

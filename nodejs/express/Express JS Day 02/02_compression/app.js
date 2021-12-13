// express is sufficient, http is not required

const path = require('path')
const express = require('express');
const compression = require('compression')

const app = express();

app.use(compression)
app.use(express.static(path.join(__dirname, 'public')))

// the first path
app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'video.html'))
});

app.listen(3000);


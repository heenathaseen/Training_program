const express = require('express');

const app = express();

const homeRoutes = require('./home');
const greetRoutes = require('./greet');

app.use(express.urlencoded({extended: false}))

app.use(homeRoutes);
app.use(greetRoutes);

app.listen(4000);

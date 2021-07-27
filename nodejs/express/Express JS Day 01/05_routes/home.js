const express = require('express');
// this module is used to create routes
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(
        '<form action="/greet" method="POST">\
        <input type="text" name="name">\
        <input type="text" name="language">\
        <button type="submit">Go</button>\
        </form>'
        );
});

module.exports = router;

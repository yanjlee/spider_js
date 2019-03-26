const get_eleven = require('./eleven')
const express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
}));
app.post('/get_eleven', function (req, res) {
    let text = req.param('text')
    let url = req.param('url')
    let eleven = get_eleven(text, url)
    res.send(eleven)
})

app.listen(3000)

function get_eleven(text, url) {

    text = new Buffer(text, 'base64').toString()
    url = new Buffer(url, 'base64').toString()
    let process = require('process')
    process.exit = function () {
        throw  'fuck'
    }
    let JSDOM = require('jsdom').JSDOM
    dom = new JSDOM('<html><head><body>hh</body></head></html>')
    location = {'href': url}
    document = dom.window.document
    window = {location: location, document: document}
    navigator = {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
        geolocation: {}
    }

    function Image() {
    }

    eleven = null

    function CASrYVcraFQgjGciKk(f) {
        eleven = f()
    }
    eval(text)
    return Buffer.from(eleven).toString('base64')
}

module.exports = get_eleven


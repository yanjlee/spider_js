function parser(e) {
    e = Buffer.from(e, 'base64').toString()

    function t(e, t, o) {
        var i = "";
        try {
            i = ((n, t) => {

                var r, o, e = "1", i = void 0 == e[0], c = i ? [] : "";
                for (r = 0; r < n.length; r++)
                    o = t.charAt(n.charAt(r).charCodeAt(0) - 21760).charAt(0),
                        i ? c.push(o) : c += o;
                return c = i ? c.join("") : c
            })(e, t)
        } catch (n) {
            i = ""
        }
        return i
    }

    var i = ["T", "F", "e", "s", "M", "a", "g", "r", "o", "B", "u", "l", "y", "m", "f", "t"];
    e = JSON.parse(e)
    e.html = t(e.ComplexHtml, e.ASYS,)
    return Buffer.from(e.html).toString('base64')
}

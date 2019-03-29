function get_hash_code(c,a,s,m){
tc = []
md = function (n, m, k) {
    var p;
    if (t[m])
        return t[m];
    if (m == 1) {
        t[m] = n % k;
        return t[m]
    }
    if (m & 1) {
        p = (m - 1) >> 1;
        t[1] = n % k;
        t[m] = (md(n, p, k) + md(n, p, k) + n % k) % k;
        return t[m]
    }
    p = m >> 1;
    t[m] = (md(n, p, k) + md(n, p, k)) % k;
    return t[m]
}
rd = function () {
    t = [0];
    s = (md(a, s, m) + c % m) % m;
    return s
}
for (var i = 0; i < 256; i++) {
    var r = '0x';
    for (var j = 0; j < 8; j++) {
        r += (rd() % 16).toString(16)
    }
    tc.push(parseInt(r, 16))
}

function hashCode() {
    var _0x24e50e = {
        'pmqAv': function _0x3bc67a(_0x21f6a6, _0xeed6f) {
            return _0x21f6a6 < _0xeed6f;
        },
        'tUguD': function _0x529e47(_0x6476ea, _0x5ee855) {
            return _0x6476ea ^ _0x5ee855;
        },
        'bTlKh': function _0x4d3092(_0x4010ff, _0xde8cef) {
            return _0x4010ff ^ _0xde8cef;
        },
        'PFtAy': function _0x59e07b(_0x3240f1, _0x482071) {
            return _0x3240f1 & _0x482071;
        },
        'DppDN': function _0x580566(_0x3bb80b, _0x142af4) {
            return _0x3bb80b >> _0x142af4;
        },
        'WavRi': function _0x1cb726(_0x320a0b, _0x1acb93) {
            return _0x320a0b & _0x1acb93;
        },
        'EcTAI': function _0x22ee49(_0x3277f3, _0x196702) {
            return _0x3277f3 >> _0x196702;
        },
        'ZjAoT': function _0x1c129a(_0x52c557, _0x5722fa) {
            return _0x52c557 & _0x5722fa;
        }
    };
    var _0x328279 = _0x3eceb6 = this.length
        , _0x5da81b = 0x0;
    for (; _0x24e50e.pmqAv(_0x5da81b, _0x3eceb6); _0x5da81b++) {
        var _0x238d5f = this.charCodeAt(_0x5da81b);
        if (_0x238d5f >> 0x8) {
            _0x328279 = _0x24e50e[_0x4f05('0x7', '\x6f\x79\x59\x26')](_0x328279 >> 0x8, tc[_0x24e50e['\x62\x54\x6c\x4b\x68'](_0x24e50e[_0x4f05('0x8', '\x6a\x66\x4d\x25')](_0x328279, 0xff), _0x24e50e[_0x4f05('0x9', '\x42\x73\x36\x74')](_0x238d5f, 0x8))]);
            _0x238d5f = _0x24e50e[_0x4f05('0xa', '\x21\x21\x23\x33')](_0x238d5f, 0xff);
        }
        _0x328279 = _0x24e50e.EcTAI(_0x328279, 0x8) ^ tc[_0x24e50e.bTlKh(_0x24e50e.ZjAoT(_0x328279, 0xff), _0x238d5f)];
    }
    return _0x328279;
}
return hashCode
}
c = 0x269ec3,
a = 0x343fd,
s = 1552287018864,// 这几个值是前端网页动态生成的，最好定时更新。
m = 0x7FFFFFFF
String.prototype.hashCode = get_hash_code(c,a,s,m)
function get_cookies(text) {
    let fcerror = get_fcerror(text)
    let _zQdjfing = get_zQdjfing(fcerror)
    return {fcerror:fcerror,_zQdjfing:_zQdjfing}
}
function get_zQdjfing(fcerror) {
return fcerror.replace(/.{1}/g, (item)=> {
            return Math.abs((item + 32).hashCode()).toString(0x10).substr(0x0, 0x6);
        });
}
function get_fcerror(text) {
    return  Math.abs(text.hashCode())+"";
}
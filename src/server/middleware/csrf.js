const csurf = require('csurf')
const csrf = csurf({ cookie: true })

const checkCsrf = (req, res, next) => {
    const ip = req.headers['x-real-ip'] || req.connection.remoteAddress || null
    if (req.hostname.includes('127.0.0.1') || ip.includes('127.0.0.1')) {
        next()
    } else {
        csrf(req, res, next)
    }
}

module.exports = checkCsrf

const serverLogMiddleWare = (req, res, next) => {
    const info = {
        hostname: req.hostname,
        baseUrl: req.baseUrl,
        originalUrl: req.originalUrl,
        method: req.method,
        params: req.params,
        body: req.body,
        fresh: req.fresh,
        ip: req.ip,
        ips: req.ips,
        cookie: req.cookies,
        date: new Date().toISOString()
    }
    console.log(JSON.stringify(info))
    next()
}
module.exports = serverLogMiddleWare

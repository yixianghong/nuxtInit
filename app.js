const express = require('express')
const app = express()
const nuxtConfig = require('./nuxt.config.js')
const apiRouter = require('./src/server/routes')
const { Nuxt, Builder } = require('nuxt')
const serverLogMiddleWare = require('./src/server/middleware/serverLogMiddleWare')
// 後端的env
require('dotenv').config();
// 加入middleware
app.use(serverLogMiddleWare)

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(nuxtConfig)
    // 取得nuxt port host 資訊
    const { host, port } = nuxt.options.server
    // Build only in dev mode
    if (process.env.NODE_ENV === 'dev') {
        const builder = new Builder(nuxt)
        await builder.build()
    }
    // 加入 api Router
    app.use(apiRouter)
    // 通过 nuxt.render 函数，把 Nuxt.js 变成你 Node.js 服务端的中间件。
    // 建议把 nuxt.render 放到中间件列表的最后面，因为它不会再调用 next() 方法，而是直接处理你 web 应用的页面渲染。
    app.use(nuxt.render)

    // 啟動 node server
    app.listen(port, host, () => {
        console.log('server is listen', + port);
    })
}

start()

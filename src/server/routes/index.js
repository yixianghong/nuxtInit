const clothesRouter = require('./product')
const express = require('express')
const apiRouter = express.Router()
apiRouter.use('/api', clothesRouter)

module.exports = apiRouter
const clothesRouter = require('./product')
const CRUDRouter = require('./CRUD')

const express = require('express')
const apiRouter = express.Router()
apiRouter.use('/api', clothesRouter)
apiRouter.use('/api', CRUDRouter)

module.exports = apiRouter
const express = require('express')
const CRUDRouter = require('./CRUD')
const apiRouter = express.Router()

apiRouter.use('/api', CRUDRouter)

module.exports = apiRouter
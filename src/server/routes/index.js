const express = require('express')
const CRUDOutsideRouter = require('./CRUD-Outside')
const CRUDLocalRouter = require('./CRUD-Local')
const apiRouter = express.Router()

apiRouter.use('/api', CRUDOutsideRouter, CRUDLocalRouter)


module.exports = apiRouter
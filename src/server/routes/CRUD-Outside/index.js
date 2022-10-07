const express = require('express')
const router = express.Router()
const asyncHandler =  require('express-async-handler')
const { getDogApi } = require('./action')

router.get(
    '/getDogApi',
    asyncHandler(async (req, res) => {
        const result = await getDogApi()
        res.json(result)
    }),
)

module.exports = router
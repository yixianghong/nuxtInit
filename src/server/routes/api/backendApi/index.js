const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const { getNews } = require('./action')

router.get(
    '/getNews',
    asyncHandler(async (req, res, next) => {
        try {
            const token = req.session.access_token
            const data = await getNews(token)
            if (data instanceof Error) {
                throw new Error(data)
            } else {
                res.status(200).json(data)
            }
        } catch (err) {
            next(err)
        }
    }),
)

module.exports = router
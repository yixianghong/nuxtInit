const express = require('express')
const router = express.Router()
const { getSomeone } = require('../../sql/sqlExample')

// R - Read
router.get('/students', async (req, res, next) => {
    try {
        let returnObj = {}
        const data = await getSomeone({ pid })
        if (data) {
            returnObj.message = 'success'
            res.status(200).json(returnObj)
        } else {
            returnObj.message = 'error'
            res.status(500).json(returnObj)
        }

    } catch (err) {
        next(err)
    }
})

// export module
module.exports = router
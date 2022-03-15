const express = require('express')
const router = express.Router()
const dbConnect = require('../../config/db')

// R - Read
router.get('/students', (req, res, next) => {
    dbConnect.query("SELECT * from students", (err, result) => {
        try {
            if (err) {
                throw err
            }
            res.json(result)
        } catch (err) {
            next(err)
        }
    })
})

// P - Post
router.post('/students', (req, res, next) => {
    dbConnect.query("INSERT INTO students(name,sex,birthday) VALUES(?,?,?)", [req.body.name, req.body.sex, req.body.birthday], (err, result) => {
        try {
            if (err) {
                throw new Error(err)
            }
            res.send('success')
        } catch (err) {
            next(err)
        }
    })
})

// export module
module.exports = router
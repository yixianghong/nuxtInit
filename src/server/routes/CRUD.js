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
            const returnObj = {
                results: result
            }
            res.status(200).json(returnObj)
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
            const returnObj = {
                message: 'insert data successfully!'
            }
            res.status(201).json(returnObj)
        } catch (err) {
            next(err)
        }
    })
})

// U - Update
router.patch('/students/:id', (req, res, next) => {
    const id = req.params.id
    dbConnect.query("update students set name=? where id = ?", [req.body.name, id], (err, result) => {
        try {
            if (err) {
                throw new Error(err)
            }
            const returnObj = {
                message: 'update data successfully!'
            }
            res.status(200).json(returnObj)
        } catch (err) {
            next(err)
        }
    })
})

// D - Delete
router.delete('/students/:id', (req, res, next) => {
    const id = req.params.id
    dbConnect.query("delete FROM students where id = ?", [id], (err, result) => {
        try {
            if (err) {
                throw new Error(err)
            }
            const returnObj = {
                message: 'delete data successfully!'
            }
            res.status(204).json(returnObj)
        } catch (err) {
            next(err)
        }
    })
})

// export module
module.exports = router
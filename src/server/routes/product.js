const express = require('express')
const router = express.Router()

router.get('/product', (req, res,) => {
    try {
        const clotherArray = []
        const clothes = {
            "name": "T-shirt",
            "price": 200,
            "inventory": 20
        }
        const clothes2 = {
            "name": "shirt",
            "price": 100,
            "inventory": 10
        }
        clotherArray.push(clothes, clothes2)
        res.json(clotherArray)
    } catch (err) {
        res.status(500)
        res.json({ 'message': err })
    }


})

// export module

module.exports = router
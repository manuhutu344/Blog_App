const router = require('express').Router()
const User = require('../Models/User')

router.post('/register', async(req, res)=>{
    const {username, password} = req.body
    try {
        const userDoc = await User.create({
            username,
            password
        })
        res.json(userDoc)
    } catch (error) {
        res.status(400).json(error)
    }
})
module.exports = router
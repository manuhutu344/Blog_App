const router = require('express').Router()
const User = require('../Models/User')

router.post('/register', async(req, res)=>{
    const {username, password} = req.body
    const userDoc = await User.create({
        username,
        password
    })
    res.json(userDoc)
})
module.exports = router
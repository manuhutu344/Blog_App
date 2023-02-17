const router = require('express').Router()
const User = require('../Models/User')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

router.post('/register', async(req, res)=>{
    const {username, password} = req.body
    try {
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, salt)
        })
        res.json(userDoc)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})
module.exports = router
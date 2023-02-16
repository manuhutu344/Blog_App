const router = require('express').Router()
const User = require('../Models/User')

router.post('/register', async(req, res)=>{
    const {username, password} = req.body
    res.json({requestData:{username, password}})
})
module.exports = router
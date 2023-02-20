const router = require('express').Router()
const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10)
const secret = 'qwertyuiopasdfghjklzxcvbnm1234567890'

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

router.post('/login', async(req, res)=>{
    const {username, password} = req.body
    const userDoc = await User.findOne({username})
   const ok = bcrypt.compareSync(password, userDoc.password)
   if(ok){
    jwt.sign({username, id:userDoc._id}, secret, {}, (err, token)=>{
        if(err) throw err
        res.cookie('token', token).json('bisa')
    })
   }else{
    res.status(400).json('error di router post login')
   }
})

module.exports = router
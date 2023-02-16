const router = require('express').Router()

router.post('/register', async(req, res)=>{
    const {username, password} = req.body
    res.json({requestData:{username, password}})
})

module.exports = router
const router = require('express').Router()

router.post('/register', async(req, res)=>{
    res.json('Berhasil Daftar')
})

module.exports = router
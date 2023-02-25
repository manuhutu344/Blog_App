const router = require('express').Router()
const multer = require('multer')
const uploadMiddleware = multer({dest: 'uploads/'})


router.post('/post', uploadMiddleware.single('file'), (req, res)=>{
    res.json({files:req.file})
})

module.exports = router
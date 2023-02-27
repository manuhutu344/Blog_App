const router = require('express').Router()
const multer = require('multer')
const uploadMiddleware = multer({dest: 'uploads/'})
const fs = require('fs')
const Post = require('../Models/Post')


router.post('/post', uploadMiddleware.single('file'), async(req, res)=>{
    const {originalname, path} = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path+'.'+ext
    fs.renameSync(path, newPath)
    const {title, summary, content} = req.body
    const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
    })
    res.json(postDoc)
})

module.exports = router
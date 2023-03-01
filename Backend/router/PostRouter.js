const router = require('express').Router()
const multer = require('multer')
const uploadMiddleware = multer({dest: 'uploads/'})
const fs = require('fs')
const Post = require('../Models/Post')
const jwt = require('jsonwebtoken')
const secret = 'qwertyuiopasdfghjklzxcvbnm1234567890'



router.post('/post', uploadMiddleware.single('file'), async(req, res)=>{
    const {originalname, path} = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path+'.'+ext
    fs.renameSync(path, newPath)
    const {token} = req.cookies
    jwt.verify(token, secret, {}, async(err, info)=>{
        if(err) throw err
        const {title, summary, content} = req.body
        const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        author:info.id,
    })
    res.json(postDoc)
    })
})

router.get('/lihat', async(req, res)=>{
    res.json(await Post.find()
    .populate('author', ['username'])
    .sort({createdAt:-1})
    .limit(20)
    )
})

module.exports = router
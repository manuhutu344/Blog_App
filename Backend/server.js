const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const userRouter = require('./router/userRouter')
const PostRouter = require('./router/PostRouter')
require('dotenv').config()
require('./connection')
const cors = require('cors')

app.use(cors({credentials:true, origin:'http://localhost:3006'}))
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/user', userRouter)
app.use('/post', PostRouter)


app.listen(9001, ()=>{
    console.log('Terkoneksi ke Server')
})
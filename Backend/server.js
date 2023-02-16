const express = require('express')
const app = express()
const userRouter = require('./router/userRouter')
require('dotenv').config()
require('./connection')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/user', userRouter)


app.listen(9001, ()=>{
    console.log('Terkoneksi ke Server')
})
const express = require('express')
const app = express()

app.get('/coba', (req, res)=>{
    res.json('Berhasil')
})

app.listen(9001, ()=>{
    console.log('Terkoneksi ke Server')
})
const express = require('express')
//express app
const app = express()

//listen for request
app.listen(3000)

app.get('/',(req,res)=>{
    res.send('<h1>hi</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})

app.use((req,res)=>{
    res.sendFile('./404.html',{ root : __dirname})
})
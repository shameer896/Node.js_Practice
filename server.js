const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)

    res.setHeader('Content-Type','text/plain')

    res.write('hello')
    res.end()
})

server.listen(3000,'localhost',()=>{
    console.log("listening for request on port number 3000")
})
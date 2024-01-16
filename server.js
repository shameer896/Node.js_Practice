const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)

    res.setHeader('Content-Type','text/html')

    res.write('<h1>hello yo</h1>')
    res.end()
})

server.listen(3000,'localhost',()=>{
    console.log("listening for request on port number 3000")
})
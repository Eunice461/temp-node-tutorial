const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url ==='/about'){
        res.end('there is a short history')
    }
    res.write(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back home</a>
    `)
    res.end()
})

server.listen(5000)
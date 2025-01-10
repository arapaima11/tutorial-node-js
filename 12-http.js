const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to Our Homepage')
    }
    else if(req.url === '/about') {
        res.end('This is Our History')
    }
    else {
    res.end(`
        <h1>Ooopsss!!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back to Homepage</a>
        `)
    }
})

server.listen(5000)

const http =require('http');
const server = http.createServer( (req, res)=> {
    if(req.url=='/'){
        res.end('Welcome to our home page, Mr. Quotient')
    }
    if(req.url=='/about'){
        res.end('Here is our short gistory of our home page, Mr. Authentic')
    }
    res.end(
        `<h1>OOPS</h1>
        <p>Sorry this page does not exist.</p>
        <a href="/">Back to home page </a>
        `
        )
res.write('Welcome to our home page, Mr. Quotient')
res.end()
})
server.listen(5000)
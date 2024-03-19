const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/home'){
        res.setHeader('Content-Type','text/plain');
        res.end("welcome home");
    }else if(url === '/about'){
        res.setHeader('content-Type','text/plain');
        res.end("welcome to about us page");

    }else if(url === '/node'){
        res.setHeader('content-Type','text/plain');
        res.end("Welcome to my nodejs project");

    }else{
        res.setHeader('content-Type','text/plain');
        res.end("404 found");
    }
});
server.listen(8000);
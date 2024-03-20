const fs = require('fs');

const requestHandler=(req, res)=>{
    const url = req.url;
    const method = req.method;
    if (url === "/") {  //read file content write it into response body along with a form
        fs.readFile(message.txt, { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
            }
            
            console.log('data from file'+data);
            res.write("<html>");
            res.write("<head><title>Enter Message</title></head>");
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
            res.write("</html>");
            res.end();
        });

        
    } else if (url === "/message" && method === "POST") {//handling incoming data write it to message.txt
        // Your code to handle POST requests
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
            fs.writeFile(message.txt, message, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('inside fs.writeFile');
                    res.statusCode = 302;
                    res.setHeader("Location", "/");
                    res.end();
                }
            });
        });
    } else {
        res.setHeader('Content-Type' , 'text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Hello from nodejs server</h1></body>');
        res.write('</html>');
        res.end();
    }
    
};
//module.exports = requestHandler;//this function stored in module .it is a global obj///export server and make it available for use in other part of application

// module.exports={
//     handler: requestHandler,
//     someText: "Some hard coded text";

// };

// module.exports.handler=requestHandler;
// module.exports.someText="code";

exports.handler=requestHandler;
exports.someText="some hard code";
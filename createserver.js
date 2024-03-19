const http = require('http');

// Creating an HTTP server
const server = http.createServer((request, response) => {
    
    // Log my name to the console
    console.log('My name is nishmack');
    
});

// Listening on port 4000
server.listen(4000, () => {
    console.log('Server is listening on port 4000');
});


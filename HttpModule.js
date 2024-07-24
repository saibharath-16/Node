const http = require('http');
const fs = require('fs');
const url = require('url');


let eventEmitter=new eventE.EventEmitter();

const myServer = http.createServer((req, res) => {
    const log = `${req.method} ${req.url} New Req Received \n`;
    const baseUrl = `http://${req.headers.host}`; 
    const myUrl = url.parse(baseUrl + req.url, true);
    console.log(req.headers)
    
    switch (myUrl.pathname) {
        case "/":
            console.log(myUrl);
            res.end("Home Page");

            break;

        case "/about":
            const username = myUrl.query.name; 
            console.log(myUrl);
            res.end(`Hi, ${username}`);
            break;

        case "/search":
            console.log('Search Page Query:', myUrl);
            res.end("You are in  search ");
            break;
    

        default:
            res.end("404 Page not found");
    }

    
    fs.appendFile("./log.txt", log, (err) => {
        if (err) {
            console.error("Error logging request:", err);
        }
    });
});

myServer.listen(2000, () => {
    console.log("Server is Running");
});

//If we want to change anything, then we need to restart the server to see the results.


const http = require('http');

const handleRequest = (req, res) => {
    const { method, url } = req;
    console.log(`Received request: ${method} ${url}`);
    res.setHeader('Content-Type', 'application/json');
    switch (method) {
        case 'GET':
            if (url === '/') {
                res.writeHead(200);
                console.log(res)
                res.end(JSON.stringify({ message: 'GET request to the root path' }));
            } else if (url === '/data') {
                res.writeHead(200);
                res.end(JSON.stringify({ data: [1, 2, 3, 4, 5] }));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ error: 'Not Found' }));
            }
            break;

        case 'POST':
            if (url === '/data') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                    console.log(body)
                });
                
                req.on('end', () => {
                    const parsedData = JSON.parse(body);
                    res.writeHead(200);
                    res.end(JSON.stringify({ message: 'Data received', data: parsedData }));
                });
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ error: 'Not Found' }));
            }
            break;

        case 'PUT':
            if (url === '/data') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                    console.log(body)
                });
                req.on('end', () => {
                    const parsedData = JSON.parse(body);
                    res.writeHead(200);
                    res.end(JSON.stringify({ message: 'Data updated', data: parsedData }));
                });
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ error: 'Not Found' }));
            }
            break;

        case 'DELETE':
            if (url === '/data') {
                res.writeHead(201);
                res.end(JSON.stringify({ message: 'Data deleted' }));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ error: 'Not Found' }));
            }
            break;

        default:
            res.writeHead(405);
            res.end(JSON.stringify({ error: `Method ${method} not allowed` }));
            break;
    }
};

const server = http.createServer(handleRequest);
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

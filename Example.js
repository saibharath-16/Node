const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const data = {
    message: 'Hi i am from Backend',
    url: url
  };
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache');

  if (url === '/') {
    data.message = 'Welcome to the homepage!';
  } else if (url === '/about') {
    data.message = 'This is the about page.';
  } else {
    res.statusCode = 404;
    data.message = 'Page not found.';
  }
  res.end(JSON.stringify(data));
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});

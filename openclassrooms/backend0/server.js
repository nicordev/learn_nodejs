const httpModule = require('http');

const server = httpModule.createServer((request, response) => {
    response.end('Hello World!');
});

server.listen(process.env.PORT || 3000);

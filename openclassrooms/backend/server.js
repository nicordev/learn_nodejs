const httpModule = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = httpModule.createServer(app);

server.listen(process.env.PORT || 3000);

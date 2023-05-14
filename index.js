require('dotenv').config();
const debugServer = require('debug')('server');
const http = require('http');

const app = require('./app/app');

const io = require('./app/socket');

const port = process.env.PORT || 3000;

const httpServer = http.createServer(app);

io(httpServer);

httpServer.listen(port, () => {
    debugServer(`Server is running on http://localhost:${port}`);
});
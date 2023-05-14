const debug = require('debug')('socket');

const { Server } = require('socket.io');

const socketController = require('../controllers/socket.controller');

const ioInit = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: '*',
        },
    });

    io.on('connection', (socket) => {
        debug('a user connected');
    
        socket.on('test', socketController.test);

        socket.on('disconnect', () => {
            debug('user disconnected');
        });
    });
};

module.exports = ioInit;
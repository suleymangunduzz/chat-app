const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const socket = require('socket.io');

const io = socket(server);

io.on('connection', socket => {
    socket.emit('user id', socket.id);
    socket.on('send message', body => {
        io.emit('message', body);
    })
})

server.listen(8000, () => console.log('server running on port 8000'));

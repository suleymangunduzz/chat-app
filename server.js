const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const options = {
    cors: true,
    origins: ["*:*"],
};

const io = require('socket.io')(server, options);

let people = {};

io.on('connection', client => {
    client.emit('user id', client.id);

    people = {
        ...people,
        [client.id]: `Guest - ${Object.keys(people).length++}`
    };
    
    client.on('send message', body => {
        io.emit('message', {
            ...body,
            userName: people[client.id]
        });
    });

    client.on('update name', name => {
        people = {
            ...people,
            [client.id]: name
        };
    });
})

server.listen(8000, () => console.log('server running on port 8000'));

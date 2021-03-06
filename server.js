const express = require('express');
const http = require('http');

const app = express();

app.use(express.static('build'));

const server = http.createServer(app);

const options = {
    cors: true,
    origins: ["*:*"],
};

const PORT = process.env.PORT || 8000;

const io = require('socket.io')(server, options);

let people = {};

io.on('connection', client => {
    client.emit('user id', client.id);

    client.on('join', () => {
        people = {
            ...people,
            [client.id]: `Guest - ${Object.keys(people).length++}`
        };
        io.emit('update', { body: `${ people[client.id] } have connected the room.`, type: 'info' });
    });
    
    client.on('send message', body => {
        io.emit('message', {
            ...body,
            userName: people[client.id]
        });
    });

    client.on('update name', name => {
        io.emit('update', { body: `${ people[client.id] } has switched name to ${ name }.`, type: 'info' });

        people = {
            ...people,
            [client.id]: name
        };
    });

    client.on('disconnect', () => {
        io.emit('update', { body: `${people[client.id]} has left the room.`, type: 'info'});
    });
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

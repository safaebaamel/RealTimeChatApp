const express = require('express');

const socketio = require('socket.io');

const http = require('http');

const {addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const {error, user} = addUser(id: socket.io, name, room);

        if (error) return callback(error);
    });


    socket.on('disconnect', () => {
        console.log('user has left!!');
    });
});

app.use(router);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));


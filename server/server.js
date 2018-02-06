const path          = require('path');
const express       = require('express');
const http          = require('http');
const socketIO      = require('socket.io');

const publicPath    = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();

let server = http.createServer(app);
let io = socketIO(server);

// Public dir
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connect')

    socket.on('disconnect', () => {
        console.log('user was disconnected')
    })
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})
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

    socket.on('disconnect', () => {
        console.log('user was disconnected')
    });

    socket.on('createMessage', (msg) => {
        console.log(msg)
    })

    socket.emit('newMessage', {
        from: 'God',
        text: 'Your got bless!',
        createdAt: new Date().toDateString()
    })
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})

var socket = io();

socket.on('connect', function() {
    console.log('connected to server.')

    socket.emit('createMessage', {
        from: 'pornanan',
        text: 'YOLO from from other side',
        createdAt: new Date().toDateString()
    });
});

socket.on('newMessage', function(msg) {
    console.log(msg)
});


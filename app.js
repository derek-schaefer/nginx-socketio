var io = require('socket.io')(8010);

io.on('connection', function(socket) {
  console.log('connection');

  socket.on('ping', function() {
    console.log('ping');
    socket.emit('pong');
  });
});

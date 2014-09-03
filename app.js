var io = require('socket.io')(8010);

io.on('connection', function(socket) {
  console.log('connection');

  socket.on('pong', function() {
    console.log('pong');
  });

  setInterval(function() {
    console.log('ping?');
    socket.emit('ping');
  }, 1000);
});

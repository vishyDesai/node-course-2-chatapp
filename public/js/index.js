var socket = io();

socket.on('connect', function () {
  console.log('Connected to Server');
});

  socket.on('newMessage', function(message){
    console.log(message);
  });

  socket.emit('createMessage', {
    from: 'vdesai',
    text: 'Hey There'
  })



socket.on('disconnect', function () {
  console.log('Disconnected from Server');
});

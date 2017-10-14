const path=require('path');
const express=require('express');
const http=require('http');
const socketIO=require('socket.io');

const app=express();
const server=http.createServer(app);

var publicPath=path.join(__dirname, '../public');
var port = process.env.PORT || 3000;
var IO=socketIO(server);

console.log(publicPath);

app.use(express.static(publicPath));

IO.on('connection', (socket) => {
  console.log('New User Connected');

  socket.on('createMessage', (message) => {
    console.log(message);
    IO.emit('newMessage', {
       from: message.from,
       text: message.text,
       createdAt: new Date().getTime()
    });
  });
});

server.listen(port,() => {
  console.log(`Server is up on port ${port}`);
});

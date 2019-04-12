const server = require("http").createServer();
const io = require("socket.io")(server);
io.on("connection", client => {
  console.log("connected sockets");
  client.on("updatePosition", data => {
    console.log(data);
    client.broadcast.emit('newPosition', data);
  });
  client.on("disconnect", () => {
    console.log("client disconnected");
  });
});
server.listen(8000, () => {
  console.log("server listening");
});

const httpServer = require('http').createServer();
const io = require("socket.io")(httpServer, {

});

io.on("connection", (socket) => {
    console.log("we are connected");
    socket.emit('test event', 'here we have some data')
});
const PORT = 3000;
httpServer.listen(()=> { 
    console.log(`we are live in this socket on ${PORT}`);
});
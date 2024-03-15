const httpServer = require('http').createServer();
const io = require("socket.io")(httpServer, {

});

io.on("connection", (socket) => {
    console.log("we are connected");
    socket.emit('test event', 'Greatness awaits you')
});
const PORT = 3000;
httpServer.listen(PORT, ()=> { 
    console.log(`we are live in this socket on ${PORT}`);
});
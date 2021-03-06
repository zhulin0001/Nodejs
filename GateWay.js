var net = require('net');
var PinaappleServer = require('./PinaappleServer');

var HOST = '127.0.0.1';
var PORT = 6969;

var connections = new Array();    //用来存放客户端连接信息

var server1 = new PinaappleServer();

var callback = function(data) {
    // console.log('DATA ' + sock.remoteAddress + ': ' + data);
    // Write the data back to the socket, the client will receive it as data from the server
    // sock.write('You said "' + data + '"');
    console.log('RECV: ' + parseInt(data));
    server1.do(data);
};

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {

    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    sock.localname = sock.remoteAddress+':'+sock.remotePort;
    console.log('LOCALNAME: ' + sock.localname + '---' + sock.name);

    connections.push(sock);

    // Add a 'data' event handler to this instance of socket
    sock.on('data', callback);

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('LOG: ' + sock + data);
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort +' '+ sock.localAddress +' '+ sock.localPort);
        console.log('DATA: ' + data);
        console.log('CLOSED NAME: ' + sock.localname);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);

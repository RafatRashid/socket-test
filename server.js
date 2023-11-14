const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);


// default namespace
io.on('connection', (socket) => {
    socket.on('joinFlowRuns', (arg) => {
        console.log('emitted joinFlowRuns on default namespace with args: ', arg);
    });
});

// custom namespace
const customNs = io.of('/custom');
customNs.on('connection', (socket) => {
    socket.on('joinFlowRuns', (arg) => {
        console.log('emitted joinFlowRuns on custom namespace with args: ', arg);
    });
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});

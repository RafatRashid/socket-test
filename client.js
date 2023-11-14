const {io} = require('socket.io-client')

const socket = io('http://localhost:3000');
const customNsSocket = io('http://localhost:3000/custom');

socket.emit('joinFlowRuns', JSON.stringify({name: 'yoyoyo'}));
customNsSocket.emit('joinFlowRuns', JSON.stringify({name: 'huhahaha'}));

console.log('emitted events');
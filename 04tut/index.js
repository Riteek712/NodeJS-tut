const logEvents = require('./logEvents') // Because this is a custom module.

const EventEmitter = require('events')

class MyEmitter extends EventEmitter{};
//initialize object
const myEmitter = new MyEmitter()

//add a listener for a log event
myEmitter.on('log', (msg) => logEvents(msg))

setTimeout(
    () =>{
        myEmitter.emit('log', 'log event emitted.')

    }, 2000
    
)


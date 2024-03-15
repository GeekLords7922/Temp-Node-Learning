const EventEmitter = require('events')

const customEmitter = new EventEmitter

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with ${id}`)
})

customEmitter.emit('response', 'bruce', 84)
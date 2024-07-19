// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events');

const customeEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customeEmitter.on('response', (name, id)=>{
  console.log(`data recieved ${name} with id ${id}`)
})

customeEmitter.on('response', ()=>{
  console.log(`Some other logic here`)
})

customeEmitter.emit('response', 'Arpit', 118)
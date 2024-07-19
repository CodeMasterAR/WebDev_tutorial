const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

//  method return the system uptime in seconds
console.log(`The Syste, Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
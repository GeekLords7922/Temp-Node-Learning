
const os = require('os')

const name = os.userInfo()
console.log(name)
console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.version(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS)
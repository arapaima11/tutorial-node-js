const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

// Info about the system uptime
console.log(`The system time is ${os.uptime()} seconds`)

//Info about current OS
const currentOS = {
    name : os.type(),
    releaese : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOS)

const {createReadStream} = require('fs')

const stream = createReadStream('./content/subfolder/big.txt')

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (error)=>{
    console.log(error)
})
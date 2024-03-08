const {readFile} = require('fs')

console.log('started a first tasks')

readFile('./content/first.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
        return
    }
    console.log(data)
    console.log('completed the first task')
})

console.log('started a second task')
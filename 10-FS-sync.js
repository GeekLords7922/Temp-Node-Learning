const {readFileSync, writeFileSync} = require('fs')

const first =  readFileSync('./content/first.txt')
const second =  readFileSync('./content/second.txt')

writeFileSync('./content/result-sync.txt', 
first+second, 
{flag: 'a'}
)
const {writeFileSync} = require('fs')
for(let i=0; i<100000; i++){
 writeFileSync('./content/subfolder/big.txt', `Hello world ${i+1}\n`, {flag:'a'})
}
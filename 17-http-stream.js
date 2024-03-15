var http = require('http')
var fs = require('fs')

http.createServer(function(request, response){
    //const text = fs.readFileSync("./content/subfolder/big.txt", 'utf-8')
    //response.end(text)
    const fileStream = fs.createReadStream("./content/subfolder/big.txt", 'utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(response)
    })
    fileStream.on('error',(err) => {
        response.end(err)
    })
}).listen(5000)
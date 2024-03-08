const {readFile} = require('fs')
const { reject } = require('lodash')
const { resolve } = require('path')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) =>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })

}

//getText('./content/First.txt').then((result)=>console.log(result)).catch((err)=>console.error(err))

const start = async() => {
    try{ 
     const first = await getText('./content/First.txt')
     console.log(first)
    }
    catch(error){
        console.log(error)
    }
}

start()


/*const { readFile, writeFile } = require('fs')
const util = require('util')
const readPromise = util.promisify(readFile)
const writePromise = util.promisify(writeFile)

const start = async () => {
    try{
        const first = await readPromise('./content/first.txt', 'utf-8')
        const second = await readPromise('./content/second.txt', 'utf-8')
        await writePromise('./content/result-mind-grenade.txt', `${first}  ${second}`)
        console.log(first,second)    
    }
    catch(error){
        console.log(error)
    }
}
start() */
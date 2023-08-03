const {format} = require('date-fns')
const {v4:uuid} = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const  logEvents = async (message, logName) =>{
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime} \t${uuid()}\t${message}\n`
    console.log(logItem)
    try{
        // Now appendFile will create the file but not the directory. so we will need to create the directory if it is not present.
        // Testing..
        if( !fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        // Action..
        await fsPromises.appendFile(path.join(__dirname,'logs',logName), logItem)

    }catch(err){
        console.log(err);
    }
}

// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))

// console.log(uuid())
module.exports = logEvents;
    



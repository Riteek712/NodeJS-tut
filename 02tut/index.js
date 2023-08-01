const fs = require('fs')
const fsPromises = require('fs').promises;
const path = require('path')
fs.readFile(
    './files/stater.txt',
    (err, data) =>{
        if (err) throw err;
        console.log(data); // This will be encoded in buffer
        console.log(data.toString())// will print in UTF-8
    }
)
console.log("Hello...") // To show readFile is asyncronous function.
fs.readFile(
    './files/stater.txt',
    'utf8', // you can define the encoding here.
    (err, data) =>{
        if (err) throw err;
        console.log(data); // This will alreafy be in string format.

    }
)

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'writing into a file', (err) =>{
//     if (err) throw err;
//     console.log('Writing complete.')
// appendFile will alos create a file if its not present.
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nwriting into a file 2', (err) =>{
//         if (err) throw err;
//         console.log('append complete.')


//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname,'files', 'newReply.txt' ), (err) =>{
//             if (err) throw err;
//             console.log('rename complete.')
//         })
//     })
// })

// -- This starting to look like callback hell.

const fileOps = async () =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'stater.txt'), 'utf8');
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), `\n\nNice to meet you.`)
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'),path.join(__dirname, 'files', 'promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files' ,'promiseComplete.txt'), 'utf8');
        console.log(newData);
    }catch(err){
        console.log(err)
    }
}

fileOps()
// exit on uncaught errors
process.on('uncaughtException', err =>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
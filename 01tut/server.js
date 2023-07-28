/*
    HOW NodeJS differs from Vanills Js
    1 - Node runs on a server - not in a btowser( backend not frontend)
    2 - The console is the terminal window.
*/
console.log("Hello world!")
// 3- global object insted of window object.
// console.log(global)
// 4 - Has common core modules that we will explore
// 5 - CommonJS modules instead of ES6 modules
// 6 - NodeJS is missing some JS APIs like Fetch.
// const os = require('os')
// const path = require('path')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
const {add ,subtract, multiply, divide} = require("./math")

console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))

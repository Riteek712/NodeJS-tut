const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) =>{
    // res.send('Hello World.')
    res.sendFile('./views/index.html', {root: __dirname})
    // res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
// Express handels thes requests like a waterfall. So in the d=end you can put a default.
// If the get request contains ^/ that means it must begin with /, similarly if $ is used it means it must end with it. | is to insert an OR operator. 
app.get('/new-page(.html)?', (req, res) =>{
    // (.html)? means that we dont need to mention .html in the URL.
    res.sendFile('./views/new-page.html', {root: __dirname})
    // res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
app.get('/old-page(.html)?', (req,res)=>{
    res.redirect(301,'./new-page.html'); // 302 by default.
    // We need to mention 301 because browser needs a 301 code to understand that it has been permanantly moved.
})
// Chaining route handlers
app.get('/hello(.html)?', (req,res,next)=>{
    console.log('Attempted to load Hello.html')
    next()
    }, (req, res)=>{
        res.send('Hello world.')
    }
)
const one = (req, res, next) =>{
    console.log('One')
    next()
};
const two = (req, res, next) =>{
    console.log('two')
    next()
}
const three = (req, res) =>{
    console.log('three')
    res.send('Finished..')
}
app.get('/chain(.html)?', [one, two,three])
app.get('/*', (req,res)=>{
    // res.send(404, "route not found!")
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})
app.listen(PORT, ()=> console.log(`Server running on Port: ${PORT}`))
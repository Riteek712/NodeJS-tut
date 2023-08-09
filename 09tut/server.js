const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500

// Middleware is anything between the request and response.
/*
There are 3 types of middleware:
bultin-Middleware
custome middleware
third party middleware
*/
// Custom middleware logger
app.use(logger)

app.use(cors(corsOptions));
// Built-in MIddleware is used to handle urlencoded data
// in other words. form data:
// 'content-type: application/x-www-form-utlencoded'

app.use(express.urlencoded({extended:false}))

// built-in middleware for json
app.use(express.json())

//Serve static files
app.use('/',express.static(path.join(__dirname, '/public')))
app.use('/subdir', express.static(path.join(__dirname, '/public')))

//Routes
app.use('/', require('./routes/root'))
app.use('/subdir', require('./routes/subdir'))
app.use('/employee', require('./routes/api/employee'))





app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});
app.use(errorHandler);
app.listen(PORT, ()=> console.log(`Server running on Port: ${PORT}`))
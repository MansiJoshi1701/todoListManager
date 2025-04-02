const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const todosRouter = require('./routes/todos')
require('dotenv').config()
//The config() method is a function provided by the dotenv module, which reads the contents of a .env file 
//& parses the key-value pairs within it. It then adds these key-value pairs as properties to the process.env object.

const app = express(); //creates a new Express app instance (a function designed to handle HTTP requests)
const PORT = process.env.PORT

//Middleware - 
//Because of app.use(), the middlewares are applied to every request that the app recieves from the client
app.use(cors()); //adds HTTP headers to the responses sent, which tells that it's allowed to make requests from other origins
app.use(bodyParser.json()); //modifies the incoming requests that contain JSON data & adds it to the req.body property.


//start the process of connecting to the DB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT , () => {
            console.log('Connected to DB and listening on port' , process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err);
    })

app.use('/todos', todosRouter);



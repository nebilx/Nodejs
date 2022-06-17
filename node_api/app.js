
// create express server
const express = require('express');
//npm i body-parser
const bodyParser = require('body-parser')
const app= express();

//npm i express-validator
const {check, validationResult} = require('express-validator')

//npm i dotenv
const dotenv = require('dotenv');
dotenv.config();



//npm i mongoose
const mongoose = require('mongoose')

//db 
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected')).catch(e=>console.log(e));

mongoose.connection.on('error',err => {
    console.log(`DB Connection error: ${err.message}`);
});


const morgan = require("morgan");

// middleware :- excutes in middle something like apply authentication, validation or push
//npm i morgan 

const myOwnMiddleware = (req, res, next) => {
    console.log("middleware is applied");
    next();
};

app.use(morgan("dev"));
app.use(myOwnMiddleware);


//bring in route 
//const postRoutes = require("./route/post");
//object destructive 
//const {getposts} = require("./route/post");
const postRoutes = require("./routes/post");

//app.get("/", postRoutes.getposts);
//app.get("/", getposts);

app.use(bodyParser.json());

//app.use(expressvalidator());
app.use("/", postRoutes);


//const portt = 3000

const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`a node js is listening to port: ${port}`)});



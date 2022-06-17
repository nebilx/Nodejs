//clsconsole.log("process: ", process);

//import
const helpers = require("./help")

//var let const

// const total =helpers.sum(10,200);
// console.log("total: " ,total);

//object destruction
//const {sum,add} = require("./help")

//modules

// const http = require('http')

// const server = http.createServer((req,res) => {
// res.end("hello world from node js updated yop");
// });


// server.listen(3000);

//listisen update from server 
// npm i nodemon 
  // "test": "echo \"Error: no test specified\" && exit 1"
  // "dev": "node app.js"
// "dev": "nodemon app.js"
// node run dev 

//express for built web app 

// const express = require('express')

// const app = express()

//  get take argument the url and go back 
// app.get('/', (req, res) => {
// res.send("hay whas up ");
// });

// app.listen(3000);


//programing event loop 
//fs file system
const fs = require('fs')
const filename = "touch.txt"
// watch file change
//fs.watch(filename,() => console.log('file changed'));


// async programing not wait for data S
// fs.readFile(filename,(err,data) => {
// if(err){
//     console.log(err);
// }
// console.log(data.toString());
// })

//synch programing wait for data and print console
const data = fs.readFileSync(filename);
console.log(data.toString());

console.log("node js asyn programing ...?");


// functional approch distibute responsibiltiy to another funciton 
const errhandler = err => console.log(err);
const datahandler = err =>console.log(data.toString());

fs.readFile(filename,(err,data) => {
if(err){
   errhandler(err);
}
datahandler(data);
})




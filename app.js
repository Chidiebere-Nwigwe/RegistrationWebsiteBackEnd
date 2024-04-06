const express = require('express');
const app = express();
const route = require('./route/route');
const connectToMongoDB = require('./connectDB');

const bodyParser = require('body-parser')

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// convert json to javascript object and put into request body
app.use(bodyParser.json());

//middleware and static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// use route
app.use(route); 

// connect to mongodb
connectToMongoDB();
app.listen(7000, ()=>{
    console.log('server is running........')
})


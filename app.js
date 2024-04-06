const express = require('express');
const app = express();
const mongoose = require('mongoose');

const route = require('./route/route')
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})


// convert json to javascript object and put into request body
app.use(express.json());


//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// use route
app.use(route);

// connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.wojwcap.mongodb.net/registration-form?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) =>
        //listen for requests  on port 7000

        app.listen(7000, ()=>{
         console.log("listening for requests on port 7000")
}))
    .catch((err)=> console.error("Error connecting to MongoDB:", err));

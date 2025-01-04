const express = require('express');
const mongoose = require('mongoose');


let data = false;
mongoose.connect('mongodb://myUser:myPassword@localhost:27017/?authSource=admin')
.then(() => {data = true;})
.catch(err => console.error('Could not connect to MongoDB...', err));
const app = express();
app.get('/' , (req,res) =>{
    res.json({"message" : "Hello World ! "});
});

app.get('/view/connection' , (req,res) => {
    if(data){
        res.json({"message" : "Connected to MongoDB" , "status" : "OK"})
    }else{
        res.json({"message" : "Not connected to MongoDB" , "status" : "No"})
    }
})

app.listen(3000 , (req,res) => {
    console.log('Server is running on port 3000 : ');
})
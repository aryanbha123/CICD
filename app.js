const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://myUser:myPassword@localhost:27017/?authSource=admin')
    .then(() => console.log("Connected with DB : ")
        .catch(err => console.error('Could not connect to MongoDB...', err)));
const app = express();
app.get('/', (req, res) => {
    res.json({ "message": "Hello World ! " });
});


app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000 : ');
})



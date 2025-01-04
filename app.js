const express = require('express');

const app = express();


app.listen('/' , (req,res) => {
    res.send('Server is running on port 3000')
})
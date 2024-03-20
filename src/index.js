const express = require('express');
const connect = require('./config/databases');
const app = express();




app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('MongoDB connected');
    
    

})
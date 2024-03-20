import express from 'express';
import {connect}  from './config/databases.js'


const app = express();





app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('MongoDB connected');
    
    
  
})
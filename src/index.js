import express from 'express';
import {connect}  from './config/databases.js'
import TweetService from './services/tweet-service.js';

const app = express();





app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    const ser = new TweetService();
    await ser.create({content : 'Done #FIVE #SIX #ff'})
    console.log('MongoDB connected');
    
    
  
})
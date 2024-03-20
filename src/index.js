const express = require('express');
const connect = require('./config/databases');
const { TweetRepository } = require('./repository/index');
const TweetService = require('./services/tweet-service');


const app = express();





app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('MongoDB connected');
    let service = new TweetService();
    
  
})
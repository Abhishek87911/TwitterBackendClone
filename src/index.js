const express = require('express');
const connect = require('./config/databases');
const app = express();

const   TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('MongoDB connected');
    // const tweet = await Tweet.create({
    //     content : 'Third tweet',
    //     userEmail: 'a@b.com'
    // });

    // const tweets = await Tweet.find({userEmail: 'a@b.com'});
   
     const tweetRepo = new TweetRepository();

     const tweet = await tweetRepo.getWithComments('65f9c7086489cea071776755');
     
     
     console.log(tweet);
    

})
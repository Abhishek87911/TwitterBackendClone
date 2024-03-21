import express from 'express';
import {connect}  from './config/databases.js'
import TweetService from './services/tweet-service.js';

const app = express();

import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiRoutes);







app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('MongoDB connected');

   
   
    // const user = await userRepo.create({
    //     email: 'Abhi@gmail.com',
    //     password: '12345',
    //     name: 'Abhishek'
    // });

   


    
    
  
})
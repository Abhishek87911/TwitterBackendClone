import express from 'express';
import {connect}  from './config/databases.js'
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';

import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
passportAuth(passport);

app.use('/api',apiRoutes);







app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('MongoDB connected');

  
   


    
    
  
})
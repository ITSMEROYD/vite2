const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connectDB = require ('./db/connect')
const app = express()
const studentsRoute = require ('./routes/studentsRoutes')


// middleware
app.use(express.json())
app.use(cors())
app.use('/', studentsRoute);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);                  //6
    app.listen(5000, () =>
      console.log('Masad netunim connected. Server is listening on port 5000...'));
  } catch (error) {
    console.log(error);
  }
};

start(); 
























/*  import tik1Route from './routes/tikRoutes.js';
*/
/* import connectDB from './db/connect.js'
import 'dotenv/config'
//


// connect to express app
const app = express()



// middleware
app.use(express.json())
app.use(cors())
app.use('/', studentsRoute);



const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);                  //6
      app.listen(5000, () =>
        console.log('Masad netunim connected. Server is listening on port 5000...'));
    } catch (error) {
      console.log(error);
    }
  };
  
  start(); 
   */


/* const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const studensRoutes = require('./routes/studensRoutes') */

// connect to mongoDB
/*  const dbURI = 'mongodb+srv://ahskelon123:XZC42VpQJOJV07kM@cluster0.ef11el7.mongodb.net/merntutorial?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then(() => {
    app.listen(3001, () => {
        console.log('Server connected to port 3001 and MongoDb')
    })
})
.catch((error) => {
    console.log('Unable to connect to Server and/or MongoDB', error)
})  */




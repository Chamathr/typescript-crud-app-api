import express from 'express';
require('express-async-errors');
import loadApp from './src/startup/app';
import Database from './src/startup/db';
require('dotenv').config()
const app = express();
import  mongoose from "mongoose"

loadApp(app);
Database.getInstance();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});

process.on('exit', function (){
  mongoose.disconnect();
  console.log('Goodbye!');
});

  
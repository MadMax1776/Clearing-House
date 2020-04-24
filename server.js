const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const db = mongoose.connection;
// require('dotenv').config();


//
// app.use(express.json());
// app.use(express.static('public'))

// const goldController = require('./controllers/goldController.js');
// app.use('/gold', goldController);

mongoose.connect('mongodb://localhost:27017/meancrud', {
 useNewUrlParser: true,
 useUnifiedTopology: true });

mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});

app.listen(3000, ()=>{
    console.log('listening...');
});

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const todosController = require('./controllers/todos.js');
app.use('/todos', todosController);

mongoose.connect('mongodb://localhost:27017/meancrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});

app.listen(3000, ()=>{
    console.log('listening...');
});

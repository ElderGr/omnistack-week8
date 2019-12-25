const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const cors = require('cors');


const server = express();

mongoose.connect('mongodb+srv://gabriel_mongo:gabriel14@cluster0-jkub1.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(5000);
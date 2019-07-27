const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const routes = require('./server/api/index.js');

require('dotenv').config();
const app = express();

app
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use(bodyParser.json())
    .use(express.static(__dirname + '/dist'))
    .use('/api', routes)
    .listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`);
    });

mongoose
    .set('useCreateIndex', true)
    .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log(err);
    });
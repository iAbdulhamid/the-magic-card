const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoClient = mongodb.mongoClient;
const path = require('path');

const URI     = process.env.MONGO_URI || 'mongodb://localhost/database';
const PORT    = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME;

app.use(bodyParser.urlencoded({ extended: flase }));
app.use(bodyParser.json());


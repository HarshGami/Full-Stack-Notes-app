const express = require('express');
const bodyparser = require('body-parser');
const dotenv =require('dotenv');
const notes = require('./routes/notesRouter');
const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));

dotenv.config({
    path:'backend/config/config.env'
});

app.use('/api/v1',notes);

module.exports = app;
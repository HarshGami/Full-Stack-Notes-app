const express = require('express');

const app = require('./app');
const connectToDb = require('./config/database');

connectToDb();
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
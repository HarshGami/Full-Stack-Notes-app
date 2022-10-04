const mongoose = require('mongoose');

const connectToDb = ()=>{
    mongoose.connect(process.env.URI).then((data)=>{
        console.log(data.connection.host);
    })
}

module.exports = connectToDb;
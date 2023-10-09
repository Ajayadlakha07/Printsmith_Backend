const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const connectToMongo = () => {
    mongoose.connect('mongodb+srv://internsinfinity:StGXTMW1ke1yDtWw@cluster0.2pudp0n.mongodb.net/Admin_data', {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    }).then(() => {
        console.log("conneted to database")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectToMongo;


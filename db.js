const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const DB_URL = process.env.DB_URL

const connectToMongo = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    }).then(() => {
        console.log("conneted to database")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectToMongo;


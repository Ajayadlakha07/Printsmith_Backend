const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const DataBase = process.env.DB_URL

const connectToMongo = () => {
    mongoose.connect('mongodb+srv://internsinfinity:admin@cluster0.d0lmv6v.mongodb.net/Admin_data', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("conneted to database")
    }).catch(() => {

    })
}

module.exports = connectToMongo;


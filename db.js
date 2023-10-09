const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const connectToMongo = () => {
    mongoose.connect('mongodb+srv://rahulchauhah50:gJAShs1TD89ZeWzj@cluster0.qa4bvb8.mongodb.net/Admin_data', {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    }).then(() => {
        console.log("conneted to database")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectToMongo;


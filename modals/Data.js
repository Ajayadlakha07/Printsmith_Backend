const mongoose = require('mongoose')
const validator = require("validator")

const jobSchema = mongoose.Schema({
     JobDetails: [{
        jobId:Number,
        position: String,
        salary: Number,
        job_description: String,
        location: String,
        experience: Number,
        date: { type: Date, default: Date.now } // Include the date field here
    }],
    Admin:[]
    
})

const Job = mongoose.model('job',jobSchema)
module.exports = Job;
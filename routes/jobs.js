const express = require('express')
const router = express.Router()
const Job = require('../modals/Data')

router.get('/data/get-jobs',async(req,res)=>{
    try {
        const existingData = await Job.findOne({});
        res.json(existingData)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.post('/data/add-job',async(req,res)=>{
    try {
        const {position, salary, job_description, location, experience} = req.body;
        
        // const existingData = await Job.findOne({});
        // if(existingData){
        //     existingData.JobDetails.push({position,salary,job_description,location,experience,date: Date.now()})
        //     const updatedData = await existingData.save();
        //     res.json({ updatedData ,success:true});
        // }else{
        //     const newJob = new Job({
        //         JobDetails:[{position,salary,job_description,location,experience,date: Date.now()}],
        //         Admin:[{username:"admin@123",password:"infinity@123"}]
        //     });
        //     const postJob = await newJob.save()
        //     res.json({"success":true,postJob})

        // }
        res.json({"name":"rahul"})
       
        }catch(error){
           res.json({"error":error,"name":"rahul"})
        }
   
})

router.post('/auth',async(req,res)=>{
    try {
        const { username, password } = req.body;

        const existingData = await Job.findOne({});
        if(existingData.Admin[0].username===username && existingData.Admin[0].password === password){
            res.json({success:true})
        }else{
            res.json({success:false})
        }
       
        }catch(error){
           res.send(error)
        }
   
})

router.post('/auth/getuser',async(req,res)=>{
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        res.json({error:error,mesage:"fetchUser error"}).status(500)
    }
})


module.exports = router
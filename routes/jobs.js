const express = require('express')
const router = express.Router()
const Job = require('../modals/Data')
const axios = require('axios');

router.get('/data/get-jobs',async(req,res)=>{
    try {
        const existingData = await Job.findOne({});
        res.json(existingData)
    } catch (error) {
        res.send(error)
    }
})

router.post('/data/add-job',async(req,res)=>{
    try {
        const {position, salary, job_description, location, experience} = req.body;
        
        const existingData = await Job.findOne({});
        if(existingData){
            const jobId = generateUniqueJobId();
            existingData.JobDetails.unshift({position,salary,job_description,location,experience,date: Date.now()})
            const updatedData = await existingData.save();
            res.json({ updatedData ,success:true});
        }else{
          const jobId = generateUniqueJobId();
            const newJob = new Job({
                JobDetails:[{position,salary,job_description,location,experience,date: Date.now()}],
                Admin:[{username:"admin@123",password:"infinity@123"}]
            });
            const postJob = await newJob.save()
            res.json({"success":true,postJob})
        }
        }catch(error){
           res.json({"error":error,"name":"rahul"})
        }
   
})

router.post('/auth',async(req,res)=>{
    try {
        const { username, password } = req.body;

        const existingData = await Job.findOne({});
        if(existingData.Admin[0].username===username && existingData.Admin[0].password === password){
            res.json({success:true});
        }else{
            res.json({success:false});
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

router.post('/send-mail', async (req, res)=>{
    try {
        const {subject, body} = req.body;

        
        const url = 'https://api2.juvlon.com/v4/httpSendMail';

        const data = {
          ApiKey: 'OTc2NjUjIyMyMDIzLTEwLTE4IDE3OjE5OjAw',
          requests: [
            {
              subject: subject,
              from: 'web.developer@infinityadvt.com',
              body: body,
              to: 'interns.infinity@gmail.com',
            },
          ],
        };
        
        axios
          .post(url, data)
          .then((response) => {
            res.send(response.data);
          })
          .catch((error) => {
            res.send(error);
          });
    } catch (error) {
       res.send(error)
    }
})

router.delete('/delete-job', async (req, res) => {
  try {
    const { jobId } = req.body; // The _id of the job to delete

    const existingData = await Job.findOne({});
    if (existingData) {
      // Find the job detail to delete based on the provided _id
      const jobIndexToDelete = existingData.JobDetails.findIndex(
        (jobDetail) => jobDetail._id.toString() === jobId
      );

      if (jobIndexToDelete !== -1) {
        // Remove the job detail from the JobDetails array
        existingData.JobDetails.splice(jobIndexToDelete, 1);
        const updatedData = await existingData.save();
        res.json({ updatedData, success: true });
      } else {
        res.json({ success: false, message: 'Job not found' });
      }
    } else {
      res.json({ success: false, message: 'Data not found' });
    }
  } catch (error) {
    res.json({ error: error, name: 'rahul' });
  } 
});

module.exports = router;
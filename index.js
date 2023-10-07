const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors');
const port = process.env.PORT || 8000
const app = express()

connectToMongo();

app.use(cors())
app.use(express.json())

app.use('/',require('./routes/jobs'))

app.listen(port,()=>{
    console.log(`you are listening at ${port}`)
})

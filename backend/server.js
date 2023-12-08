const express = require('express')
const cors = require('cors')
const app = express(); 
const postrouter = require('./routes/post')


// setting up dependicies 
app.use(express.json())
app.use(cors()); 

app.use('/api', postrouter)



app.listen(3001,()=>{
    console.log("!!!!Backend is Running !!!!!!")
})
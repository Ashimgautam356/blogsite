const express = require('express')
const cors = require('cors')
const app = express(); 
const postrouter = require('./routes/post')
const signupRouter = require('./routes/signup')
const cookieParser = require('cookie-parser');
const upload = require('./middleware/multerSetup');
// const {restrictToLoggedInUserOnly} = require('./middleware/auth')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

// setting up dependicies 
app.use(cors()); 

// app.use('/api',restrictToLoggedInUserOnly, postrouter)



app.use('/api/user',signupRouter)

app.use('/api/user/posts',postrouter)


app.post('/api/uploads',upload.single("file"),(req,res)=>{
    const file = req.file;
    res.status(200).json(file.filename)
})

app.listen(8800,()=>{
    console.log("!!!!Backend is Running !!!!!!")
})
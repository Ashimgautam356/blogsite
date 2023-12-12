const express = require('express')
const cors = require('cors')
const app = express(); 
const postrouter = require('./routes/post')
const multer  = require('multer')
const signupRouter = require('./routes/signup')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// setting up dependicies 
app.use(cors()); 

app.use('/api', postrouter)


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "../frontend/public/upload")
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// })

// const upload = multer({storage})

// upload.single("file")
app.use('/api/user',signupRouter)



app.listen(3001,()=>{
    console.log("!!!!Backend is Running !!!!!!")
})
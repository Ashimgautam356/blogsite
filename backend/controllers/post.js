const db = require('../database')

const getPost= (req,res)=>{
    db.query('SELECT * FROM posts',(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).json(data);
        }
    })
}

const uploadPost = (req, res)=>{
    const heading = req.body.heading; 
    const details = req.body.details ;
    db.query('INSERT INTO posts (id,heading,details,photo) VALUES (?,?,?,?)',[2,heading,details,"photo2"],(err=>{
        if(err){
            console.log('error on uploadPost',err)
        }else{
            res.json("post has been created")
        }
    }))
}


module.exports = {
    getPost,
    uploadPost
}
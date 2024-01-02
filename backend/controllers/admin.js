const db = require('../database.js')
const jwt = require("jsonwebtoken");

// for deliting all the post 
const deleteAllPost = async(req,res)=>{
    const token = req.cookies.uid;
    if(!token) return res.status(401).json("not authenticated");
    jwt.verify(token,"Thisissupposetobesuppersecret",(err,userInfo)=>{
        if(err) return res.status(500).json('not a valid token')

        console.log(req.body)
    })
}

// for making  Banner
const makingBanner = async(req,res)=>{
    const token = req.cookies.uid;
    if(!token) return res.status(401).json("not authenticated");
    jwt.verify(token,"Thisissupposetobesuppersecret",(err,userInfo)=>{
        if(err) return res.status(500).json('not a valid token')

        const q = "UPDATE posts SET `credit`=? WHERE `id`=?";
        db.query(q,[2,req.body.id,],(err)=>{
            if(err) return res.status(500).json(err);
            return  res.status(200).json("had been made banner")
        })
    })
}

// for making editor's choice
const makingEditorChoice = async(req,res)=>{
    const token = req.cookies.uid;
    if(!token) return res.status(401).json("not authenticated");
    jwt.verify(token,"Thisissupposetobesuppersecret",(err,userInfo)=>{
        if(err) return res.status(500).json('not a valid token')

        const q = "UPDATE posts SET `credit`=? WHERE `id`=?";
        db.query(q,[1,req.body.id,],(err)=>{
            if(err) return res.status(500).json(err);
            return  res.status(200).json("had been made editor choice")
        })
        
    })
}
// for Removing editor's choice 
const removingEditorChoice = async(req,res)=>{
    const token = req.cookies.uid;
    if(!token) return res.status(401).json("not authenticated");
    jwt.verify(token,"Thisissupposetobesuppersecret",(err,userInfo)=>{
        if(err) return res.status(500).json('not a valid token')

        const q = "UPDATE posts SET `credit`=? WHERE `id`=?";
        db.query(q,[0,req.body.id,],(err)=>{
            if(err) return res.status(500).json(err);
            return  res.status(200).json("removed from  editor choice")
        })
    })
}
// for removing Banner
const removingBanner = async(req,res)=>{
    const token = req.cookies.uid;
    if(!token) return res.status(401).json("not authenticated");
    jwt.verify(token,"Thisissupposetobesuppersecret",(err,userInfo)=>{
        if(err) return res.status(500).json('not a valid token')

        const q = "UPDATE posts SET `credit`=? WHERE `id`=?";
        db.query(q,[0,req.body.id,],(err)=>{
            if(err) return res.status(500).json(err);
            return  res.status(200).json("removed banner")
        })
    })
}



module.exports = {
    deleteAllPost,
    makingBanner,
    makingEditorChoice,
    removingBanner,
    removingEditorChoice
}

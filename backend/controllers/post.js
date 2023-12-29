const db = require("../database");
const jwt = require("jsonwebtoken");


// getting all the post
const getPost = (req, res) => {
  db.query("SELECT * FROM posts", (err, data) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(data);
    }
  });
};


// addPost
const addPost = (req, res) => {
  const { title, desc, cat, img, date, userid } = req.body;

  const token = req.cookies.uid;
  jwt.verify(token, "Thisissupposetobesuppersecret", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    db.query('INSERT INTO posts (heading,details,photo,date,cate,userId) VALUES (?,?,?,?,?,?)',[title,desc,img,date,cat,userid],(err=>{
        if(err){
            return res.status(500).json(err)
        }else{
            return res.status(200).json("post has been created")
        }
    }))
  });
};



// edit post 
const editPost = (req,res)=>{
  const token = req.cookies.uid;
  if(!token) return res.status(401).json('Not authenticated')
  jwt.verify(token,"Thisissupposetobesuppersecret",(err,userInfo)=>{
    if(err) return res.status(500).json("Token not valid")

    const postId = req.params.id
    
    const q =  "UPDATE posts SET `heading`=?,`details`=?,`photo`=?,`cate`=? WHERE `id` = ? AND `userId` = ?";
    const {title,desc,cat,img} = req.body;
    db.query(q,[title,desc,img,cat,postId,userInfo.id],(err,result)=>{
      if(err) return res.status(500).json(err);
      return res.status(200).json('Post has been updated')
    })
  })
}

// delete post
const deletePost = (req,res)=>{
  const token = req.cookies.uid; 
  jwt.verify(token,"Thisissupposetobesuppersecret",(err,userInfo)=>{
    if(err) return res.status(500).json('Token not valid')

    const postId = req.params.id;
    
    const q = "DELETE FROM posts WHERE `id` = ? AND `userId` = ?";

    db.query(q,[postId,userInfo.id],(err,result)=>{
      if(err) return res.status(500).json(err);
      return res.status(200).json("Post has been deleted")
    })
    
  })
}


module.exports = {
  getPost,
  addPost,
  editPost,
  deletePost
};

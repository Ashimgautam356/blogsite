const db = require("../database");
const jwt = require("jsonwebtoken");


const getPost = (req, res) => {
  db.query("SELECT * FROM posts", (err, data) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(data);
    }
  });
};

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

module.exports = {
  getPost,
  addPost,
};

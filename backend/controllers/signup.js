const db = require("../database.js");
// const { v4 : uuidv4 } =require('uuid');
const {setUser} = require('../services/auth.js')
const bcrypt = require('bcryptjs')

const userSignup = async (req, res) => {
  const { userName, email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ? OR userName = ?",[email,userName],(err,data)=>{
    if (err) return res.status(500).json(err);
    if(data.length) return res.status(409).json("user already exists")

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [userName, email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });

  })
 
};


const userLogin = (req, res) => {
  const { userName, password } = req.body;
  db.query(
    "SELECT userName,password FROM users WHERE userName= ? AND password = ?",
    [userName, password],
    (err,result) => {
      if (err) {
        res.status(500).json("error on email or password", err);
      }
      if(result.length !== 0 ){
        const user = result[0]
        // const sessionId  = uuidv4()

        // this setuser is for statefull
        // setUser(sessionId,user);
        
        // this setUser is for stateless

        const token = setUser(user);
        // this cookie is for the statefull
        // res.cookie("uid", sessionId,{
        //   httpOnly:true,
        //   sameSite: 'None', 
        //   path: '/', 
        //   domain: 'localhost',
        // }).status(200).json("login sucessfull");

        // this cookie is for stateless
        res.cookie("uid",token,{
          httpOnly:true,
          sameSite:"None",
          domain: 'localhost',
          secure: true,
        }).status(200).json("login sucessfull");
      }
    }
  );
};

module.exports = {
  userSignup,
  userLogin
};

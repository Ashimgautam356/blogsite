const db = require("../database.js");
const { v4 : uuidv4 } =require('uuid');
const {setUser} = require('../services/auth.js')

const userSignup = (req, res) => {
  const { userName, email, password } = req.body;
  db.query(
    "INSERT INTO users (email,userName,password) VALUES (?,?,?)",
    [email, userName, password],
    (err) => {
      if (err) {
        res.json("error while sending data", err);
      } else {
        res.status(200).json("registered");
      }
    }
  );
};


const userLogin = (req, res) => {
  const { userName, password } = req.body;
  db.query(
    "SELECT userName,password FROM users WHERE userName= ? AND password = ?",
    [userName, password],
    (err,result) => {
      if (err) {
        res.json("error while sending data", err);
      }
      if(result.length !== 0 ){
        const user = result[0]
        const sessionId  = uuidv4()

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

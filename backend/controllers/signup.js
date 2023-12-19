const db = require("../database.js");
// const { v4 : uuidv4 } =require('uuid');
const {setUser} = require('../services/auth.js')
const bcrypt = require('bcryptjs')

const userSignup = async (req, res) => {
  const { userName, email, password } = req.body;
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0'); 

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0'); 

  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds} ${ampm}`;

  db.query("SELECT * FROM users WHERE email = ? OR userName = ?",[email,userName],(err,data)=>{
    if (err) return res.status(500).json(err);
    if(data.length) return res.status(409).json("user already exists")

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const q = "INSERT INTO users(`userName`,`email`,`password`,`date`) VALUES (?)";
    const values = [userName, email, hash,formattedDate];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });

  })
 
};


const userLogin = (req, res) => {
  //CHECK USER

  const q = "SELECT * FROM users WHERE userName = ?";

  db.query(q, [req.body.userName], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
    return res.status(400).json("Wrong username or password!");

      if(data.length !== 0 ){
        const user = data[0]
        const {password, ...other} = user
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
        }).status(200).json(other);
      }
    }
  );
};

module.exports = {
  userSignup,
  userLogin
};

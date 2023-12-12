const db = require("../database.js");

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
        res.status(200).json("login sucessfull")
      }
    }
  );
};

module.exports = {
  userSignup,
  userLogin
};

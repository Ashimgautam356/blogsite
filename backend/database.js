const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost', 
    user : 'root', 
    password: 'ashim', 
    database: 'blogpost'
})
db.connect(err=>{
    if(err){
        console.log("error in connnection")
    }
    else{
        console.log("database connected")
    }
})

module.exports = db; 
const {getUser} = require('../services/auth')

const restrictToLoggedInUserOnly = async(req,res,next)=>{
    const userUid = req.cookies?.uid; 
    if(!userUid) return res.json("please login first didnot find userid")
    
    const user = getUser(userUid);
    if(!user) return res.json("please login first did not find the user");

    req.user = user
    next();
}

module.exports = {
    restrictToLoggedInUserOnly
}
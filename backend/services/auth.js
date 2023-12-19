// This is for the state full  
// const sessionIdToUserMap = new Map(); 

// const setUser = (id,user)=>{
//     sessionIdToUserMap.set(id,user);
// }

// const getUser = (id)=>{
//     sessionIdToUserMap.get(id);
// }

// module.exports = {
//     setUser,
//     getUser
// }



//  This is for state less
const jwt = require('jsonwebtoken')

const secret = "Thisissupposetobesuppersecret"

const setUser = (user)=>{
    const us = {id:user.id ,userName:user.userName}
    const token = jwt.sign(us,secret);
    return token;
}

const getUser = (token)=>{
    return jwt.verify(token,secret)
}

module.exports = {
    setUser,
    getUser
}
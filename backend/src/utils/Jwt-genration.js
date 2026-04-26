// jwt require
const jwt = require('jsonwebtoken') 

import {JWT_SECRET,JWT_EXPIRES_IN} from "../config/env.js"

// function genrate 
function genrateToken (payload) {
    return jwt.sign(payload,JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
}
// export 
module.exports = {genrateToken};
// jwt require
import jwt from 'jsonwebtoken'; 

import {JWT_SECRET,JWT_EXPIRES_IN} from "../config/env.js"

// function genrate 
function genrateToken (payload) {
    return jwt.sign(payload,JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
}
// export 
export default genrateToken;
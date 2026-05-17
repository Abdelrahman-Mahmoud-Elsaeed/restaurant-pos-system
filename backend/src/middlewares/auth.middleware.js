// json web token 
import jwt from 'jsonwebtoken';

// import 
import { JWT_SECRET } from "../config/env.js";

const authMiddelware = (req, res, next) => {
    try {
        // get token from headeres 
        const authHeader = req.headers.authorization;
        // console.log(authHeader);
        // not token 
        if (!authHeader) {
            return res.status(401).json({ msg: "Token Required" });
        }
        // get token with split
        const token = authHeader.split(" ")[1]
        // console.log(token)
        // get token value >>verify >>payload
        const payload = jwt.verify(token, JWT_SECRET);
        // console.log(payload)
        req.user = payload;
        console.log(req.user)
        // !just for testing global middelware

        // const data = null;
        // if (!data){
        //     const error = new Error("for global error ");
        //     error.statusCode = 400;
        //     next(error)
        // }
        next()

        // next
    } catch (error) {
        next(error)
    }
}

export { authMiddelware };


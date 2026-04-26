// user model 
const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const genrateToken = require("../utils/Jwt-genration")
// controller for login 
const loginController = async function (req, res) {
    try {
        const {email , password} = req.body;
        // find user 
        const user = await User.findOne({email}).select("+password");
        // if not exist 
        if(!user){
            return res.status(404).json({msg:"User not found"});
        }
        // if exist >>>compare password 
        const isMatch = await bcrypt.compare(password , user.password);
        // if match >> generate token
        if(!isMatch){
            return res.status(401).json({msg:"invalid user name or password "});
        }
        const token = genrateToken(user._id);
        return res.status(200).json({msg:"login success ", user , token });
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

// controller for register
const registerController = async function (req, res) {
    try {
        const {name , mobile ,email , password  } = req.body;
        // if user exist
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:"User already exist"});
        }
        // if not exist >> create user
        const newUser = await User.create({name , mobile ,email , password  });
        return res.status(201).json({msg:"user created successfully ", user:newUser});

        
    } catch (error) {
        return res.status(500).json(error);
    }
}
// export 

module.exports = {loginController ,loginController};
// user model 
import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import generateToken  from "../utils/Jwt-genration.js";

// controller for login 
const loginController = async function (req, res) {
    try {
        const { email, password } = req.body;
        
        // find user (ensure user is not deleted)
        const user = await User.findOne({ email, isDeleted: false }).select("+password");
        
        // if not exist 
        if (!user) {
            return res.status(404).json({ msg: "User not found or account deleted" });
        }

        // if exist >>> compare password 
        const isMatch = await bcrypt.compare(password, user.password);
        
        // if match >> generate token
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid email or password" });
        }

        // generate token with id and role
        const token = generateToken({ id: user._id, role: user.role });

        // hide password from response
        user.password = undefined;

        return res.status(200).json({ msg: "Login success", user, token });
        
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error: error.message });
    }
}

// controller for register
const registerController = async function (req, res) {
    try {
        const { name, mobile, email, password, role } = req.body;

        // if user exist
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "User already exist" });
        }

        // if not exist >> create user 
        const newUser = await User.create({ 
            name, 
            mobile, 
            email, 
            password, 
            role 
        });

        // hide password from response
        newUser.password = undefined;

        return res.status(201).json({ msg: "User created successfully", user: newUser });
        
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error: error.message });
    }
}

const moveToBin = async function (req, res) {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(
            id, 
            { isDeleted: true, deletedAt: Date.now() },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        return res.status(200).json({ msg: "User moved to bin successfully" });

    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error: error.message });
    }
}


const loginWithPinController = async function (req, res) {
    try {
        const { pin } = req.body;
        
        // find user (ensure user is not deleted)
        const user = await User.findOne({ pin });
        
        // if not exist 
        if (!user) {
            return res.status(404).json({ msg: "User not found or account deleted" });
        }

        // generate token with id and role
        const token = generateToken({ id: user._id, role: user.role });

        // hide password from response
        user.password = undefined;

        return res.status(200).json({ msg: "Login success", user, token });
        
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error: error.message });
    }
}
// export 
export  { loginController, registerController, moveToBin };
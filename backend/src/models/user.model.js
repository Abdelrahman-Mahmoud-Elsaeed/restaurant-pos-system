const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
import {BCRYPT_SALT_ROUNDS} from "../config/env.js";

// user model had >> user name , mobile , email , password 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
}
    , { timestamps: true });


schema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  try {
    //! protecting against brute-force attacks. >> recommended
    const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

const model = mongoose.model("User",userSchema);
module.exports = model;
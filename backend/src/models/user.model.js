import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from "../config/env.js";

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


userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
    return;

});

const model = mongoose.model("User", userSchema);
export default model;
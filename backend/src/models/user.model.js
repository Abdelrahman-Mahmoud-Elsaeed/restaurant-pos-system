import mongoose from'mongoose';
import bcrypt from'bcrypt';
import { BCRYPT_SALT_ROUNDS } from "../config/env.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    mobile: {
        type: String, 
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
    },
    role: {
        type: String,
        enum: ['manager', 'cashier'], 
        default: 'cashier'
    },
    pin : {
        type : Number,
        max: 9999,
        unique: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
        select: false 
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true });

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(Number(BCRYPT_SALT_ROUNDS));
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (error) {
        return next(error);
    }
});

const model = mongoose.model("User", userSchema);
export default model;
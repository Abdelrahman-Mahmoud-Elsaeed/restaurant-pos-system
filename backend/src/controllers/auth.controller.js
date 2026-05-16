import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/Jwt-genration.js";
import sendResponse from "../utils/sendResponse.js";

const loginController = async function (req, res, next) {
  const { email, password } = req.body;

  const user = await User.findOne({ email, isDeleted: false }).select(
    "+password",
  );

  if (!user) {
    return sendResponse(res, 404, "User not found or account deleted");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return sendResponse(res, 401, "Invalid email or password");
  }

  const token = generateToken({ id: user._id, role: user.role });

  user.password = undefined;

  return sendResponse(res, 200, "Login successfully", { user, token });
};

const registerController = async function (req, res) {
  const { name, mobile, email, password, role, pin } = req.body;

  const userExist = await User.findOne({ email });
  
  if (userExist) {
    return sendResponse(res, 400, "User already exist");
  }

  const newUser = await User.create({
    name,
    mobile,
    email,
    password,
    role,
    pin
  });

  newUser.password = undefined;
  const token = generateToken({ id: newUser._id, role: newUser.role });

  return sendResponse(res, 200, "User created successfully", {
    user: newUser,
    token,
  });
};

const moveToBin = async function (req, res) {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(
    id,
    { isDeleted: true, deletedAt: Date.now() },
    { new: true },
  );

  if (!user) {
    return sendResponse(res, 404, "User not found");
  }
  return sendResponse(res, 200, "User moved to bin successfully");
};

const loginWithPinController = async function (req, res) {
  const { pin } = req.body;

  const user = await User.findOne({ pin });

  if (!user) {
    return sendResponse(res, 404, "User not found or account deleted");
  }

  const token = generateToken({ id: user._id, role: user.role });

  user.password = undefined;

  return sendResponse(res, 200, "Login successfully", { user, token });
};

export { loginController, registerController, moveToBin };

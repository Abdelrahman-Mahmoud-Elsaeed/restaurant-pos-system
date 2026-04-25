import dotenv from "dotenv";

dotenv.config();

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env variable: ${name}`);
  }
  return value;
}

const env = {
  PORT: parseInt(process.env.PORT, 10) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",

  MONGO_URI: required("MONGO_URI"),

  JWT_SECRET: required("JWT_SECRET"),
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || null,

  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 10,

  CLIENT_URL: process.env.CLIENT_URL || "*",
};

export const {PORT,
NODE_ENV,
MONGO_URI,
JWT_SECRET,
JWT_EXPIRES_IN,
JWT_REFRESH_SECRET,
BCRYPT_SALT_ROUNDS,
CLIENT_URL} =  env
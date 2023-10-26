import jwt from "jsonwebtoken";
import authConfig from "../config/auth.json";

export function generateToken(parameters: object = {}) {
  return jwt.sign(parameters, authConfig.secret, {
    expiresIn: 60 * 60 * 8, // 8 hours
  });
}

import jwt from 'jsonwebtoken';
import { createError } from '../error.js';
export const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return next(createError(401, "You are not authenticated!"));
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return next(createError(401, "You are not authenticated!"));
    // console.log(token)

    const decode = jwt.verify(token, process.env.JWT);
    if (!decode) return next(createError(401, "Invalid token!"));

    req.user = decode;
    // console.log(req.user)
    return next();
  } catch (err) {
    console.error("Error verifying token:", err);
    next(createError(401, "Invalid token!"));
  }
};

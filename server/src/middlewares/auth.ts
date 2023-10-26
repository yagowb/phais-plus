import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import authConfig from "../config/auth.json";

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "No authorization token provided",
      message: "Please include an authorization token in the request headers.",
    });
  }

  const authParts = authHeader.split(" ");

  if (authParts.length !== 2) {
    return res.status(401).json({
      error: "Invalid authorization token",
      message: "The provided authorization token is invalid.",
    });
  }

  const [scheme, token] = authParts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({
      error: "Malformatted authorization token",
      message: "Please provide a valid authorization token.",
    });
  }

  jwt.verify(token, authConfig.secret, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        error: "Invalid authorization token",
        message: "The provided authorization token is invalid.",
      });
    }

    // @ts-ignore
    req.userId = decoded.id;

    return next();
  });
};

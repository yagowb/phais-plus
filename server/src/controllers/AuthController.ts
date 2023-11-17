import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { validateDocument } from "../utilities/validations";
import { generateToken } from "../utilities/auth";

const prisma = new PrismaClient();

export class AuthController {
  async authenticate(req: Request, res: Response) {
    try {
      const { cnpj, password } = req.body;

      if (!validateDocument(cnpj)) {
        return res.status(400).json({
          error: "Invalid CNPJ",
          message: "Please provide a valid CNPJ.",
        });
      }

      const foundUser = await prisma.user.findUnique({
        where: { cnpj, deleted_at: null },
        select: {
          id: true,
          cnpj: true,
          email: true,
          username: true,
          password: true,
          phone: true,
          created_at: true,
          updated_at: true,
        },
      });

      if (!foundUser || !(await bcrypt.compare(password, foundUser.password))) {
        return res.status(401).json({
          error: "Authentication failed",
          message: "The CNPJ or password is incorrect.",
        });
      }

      res.status(200).json({
        message: "User authenticated successfully.",
        data: {
          token: generateToken({ id: foundUser.id }),
          user: { ...foundUser, password: undefined },
        },
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }
}

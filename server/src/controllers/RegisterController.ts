import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { validateDocument, validateEmail } from "../utilities/validations";

const prisma = new PrismaClient();

export class RegisterController {
  async index(req: Request, res: Response) {
    try {
      const foundRegisters = await prisma.register.findMany({
        select: {
          id: true,
          cnpj: true,
          email: true,
          username: true,
          phone: true,
          approved: true,
          created_at: true,
          updated_at: true,
        },
      });

      return res.status(200).json({
        message: "Registers found sucessfully.",
        data: foundRegisters,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { cnpj, email, username, phone } = req.body;

      if (!cnpj || !email || !username || !phone) {
        return res.status(400).json({
          error: "Missing or invalid data",
          message: "Please provide all required fields.",
        });
      }

      if (!validateDocument(cnpj)) {
        return res.status(400).json({
          error: "Invalid CNPJ",
          message: "Please provide a valid CNPJ.",
        });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({
          error: "Invalid email address",
          message: "Please provide a valid email address.",
        });
      }

      const foundRegister = await prisma.register.findUnique({
        where: { cnpj },
      });

      if (foundRegister) {
        return res.status(409).json({
          error: "Register already exists",
          message: "A register with the provided CNPJ already exists.",
        });
      }

      const createdRegister = await prisma.register.create({
        data: {
          cnpj,
          email,
          username,
          phone,
        },
      });

      return res.status(201).json({
        message: "Register created successfully.",
        data: createdRegister,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }
}

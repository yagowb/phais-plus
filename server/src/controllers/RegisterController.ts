import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

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
}

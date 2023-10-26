import { randomUUID } from "node:crypto";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { validateDocument, validateEmail } from "../utilities/validations";

const prisma = new PrismaClient();

export class RegisterController {
  async index(req: Request, res: Response) {
    try {
      const foundRegisters = await prisma.register.findMany({
        where: { deleted_at: null },
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
        where: { cnpj, deleted_at: null },
      });

      if (foundRegister) {
        return res.status(409).json({
          error: "Register already exists",
          message: "A register with the provided CNPJ already exists.",
        });
      }

      const createdRegister = await prisma.register.create({
        data: { cnpj, email, username, phone },
      });

      return res.status(201).json({
        message: "Register created successfully.",
        data: createdRegister,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { cnpj, email, username, phone } = req.body;

      if (!cnpj && !email && !username && !phone) {
        return res.status(400).json({
          error: "No fields to update provided",
          message: "Please provide at least one field to update.",
        });
      }

      if (
        cnpj === null ||
        email === null ||
        username === null ||
        phone === null
      ) {
        return res.status(400).json({
          error: "Incomplete information",
          message: "None of these fields can be null.",
        });
      }

      if (cnpj && !validateDocument(cnpj)) {
        return res.status(400).json({
          error: "Invalid CNPJ",
          message: "Please provide a valid CNPJ.",
        });
      }

      if (email && !validateEmail(email)) {
        return res.status(400).json({
          error: "Invalid email address",
          message: "Please provide a valid email address.",
        });
      }

      const foundRegister = await prisma.register.findUnique({
        where: { id, deleted_at: null },
      });

      if (!foundRegister) {
        return res.status(404).json({
          error: "Register not found",
          message: "A register with the provided ID does not exist.",
        });
      }

      if (cnpj) {
        const foundRegisterByCnpj = await prisma.register.findUnique({
          where: { cnpj, deleted_at: null },
          select: { cnpj: true },
        });

        if (
          foundRegisterByCnpj &&
          foundRegisterByCnpj.cnpj !== foundRegister.cnpj
        ) {
          return res.status(409).json({
            error: "CNPJ not available",
            message: "A register with the provided CNPJ already exists.",
          });
        }
      }

      const updatedRegister = await prisma.register.update({
        where: { id },
        data: { cnpj, email, username, phone },
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
        message: "Register updated successfully.",
        data: updatedRegister,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    const foundRegister = await prisma.register.findUnique({
      where: { id, deleted_at: null },
    });

    if (!foundRegister) {
      return res.status(404).json({
        error: "Register not found",
        message: "Please provide the ID of an existing register.",
      });
    }

    const uuid = randomUUID();

    await prisma.register.update({
      where: { id },
      data: {
        cnpj: `${uuid}${foundRegister.cnpj}`,
        phone: uuid,
        deleted_at: new Date(),
      },
    });

    return res.status(204).json({ message: "Register deleted successfully." });
  }
}

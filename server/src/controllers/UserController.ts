import { randomUUID } from "node:crypto";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { validateDocument, validateEmail } from "../utilities/validations";

const prisma = new PrismaClient();

export class UserController {
  async index(req: Request, res: Response) {
    try {
      const foundUsers = await prisma.user.findMany({
        where: {
          deleted_at: null,
        },
        select: {
          id: true,
          cnpj: true,
          email: true,
          username: true,
          phone: true,
          created_at: true,
          updated_at: true,
        },
      });

      return res.status(200).json({
        message: "Users found successfully.",
        data: foundUsers,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { cnpj, email, username, password, phone } = req.body;

      if (!cnpj || !email || !username || !password || !phone) {
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

      const foundUser = await prisma.user.findUnique({
        where: { cnpj },
      });

      if (foundUser) {
        return res.status(409).json({
          error: "User already exists",
          message: "A user with the provided CNPJ already exists.",
        });
      }

      const createdUser = await prisma.user.create({
        data: {
          cnpj,
          email,
          username,
          password,
          phone,
        },
      });

      return res.status(201).json({
        message: "User created successfully.",
        data: createdUser,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { cnpj, email, username, password, phone } = req.body;

      if (!cnpj && !email && !username && !password && !phone) {
        return res.status(400).json({
          error: "No fields to update provided",
          message: "Please provide at least one field to update.",
        });
      }

      if (
        cnpj === null ||
        email === null ||
        username === null ||
        password === null ||
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

      const foundUser = await prisma.user.findUnique({
        where: { id },
      });

      if (!foundUser) {
        return res.status(404).json({
          error: "User not found",
          message: "A user with the provided ID does not exist.",
        });
      }

      if (cnpj) {
        const foundUserByCnpj = await prisma.user.findUnique({
          where: { cnpj },
          select: { cnpj: true },
        });

        if (foundUserByCnpj && foundUserByCnpj.cnpj !== foundUser.cnpj) {
          return res.status(409).json({
            error: "CNPJ not available",
            message: "A user with the provided CNPJ already exists.",
          });
        }
      }

      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          cnpj,
          email,
          username,
          password,
          phone,
        },
        select: {
          id: true,
          cnpj: true,
          email: true,
          username: true,
          phone: true,
          created_at: true,
          updated_at: true,
        },
      });

      return res.status(200).json({
        message: "User updated sucessfully.",
        data: updatedUser,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const foundUser = await prisma.user.findUnique({
        where: { id, deleted_at: null },
      });

      if (!foundUser) {
        return res.status(404).json({
          error: "User not found",
          message: "Please provide the ID of an existing user.",
        });
      }

      const uuid = randomUUID();

      await prisma.user.update({
        where: {
          id,
        },
        data: {
          cnpj: `${uuid}${foundUser.cnpj}`,
          password: uuid,
          phone: uuid,
          deleted_at: new Date(),
        },
      });

      return res.status(204).json({ message: "User deleted successfully." });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }
}

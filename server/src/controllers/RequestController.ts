import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class RequestController {
  async index(req: Request, res: Response) {
    try {
      const foundRequests = await prisma.request.findMany({
        where: { deleted_at: null },
        select: {
          id: true,
          hospital: true,
          medication: true,
          priority: true,
          status: true,
          created_at: true,
          updated_at: true,
        },
      });

      return res.status(200).json({
        message: "Requests found sucessfully.",
        data: foundRequests,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }
}

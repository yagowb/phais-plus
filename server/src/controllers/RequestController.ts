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
          quantity: true,
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

  async create(req: Request, res: Response) {
    try {
      const { hospital_id, medication_id, priority_id, status_id, quantity } =
        req.body;

      if (
        !hospital_id ||
        !medication_id ||
        !priority_id ||
        !status_id ||
        !quantity ||
        quantity <= 0
      ) {
        return res.status(400).json({
          error: "Missing or invalid data",
          message: "Please provide all required fields.",
        });
      }

      const foundHospital = await prisma.user.findUnique({
        where: { id: hospital_id, deleted_at: null },
      });

      if (!foundHospital) {
        return res.status(404).json({
          error: "Hospital not found",
          message: "A hospital with the provided ID not exists.",
        });
      }

      const foundMedication = await prisma.medication.findUnique({
        where: { id: medication_id, deleted_at: null },
      });

      if (!foundMedication) {
        return res.status(404).json({
          error: "Medication not found",
          message: "A medication with the provided ID not exists.",
        });
      }

      const foundPriority = await prisma.priority.findUnique({
        where: { id: priority_id, deleted_at: null },
      });

      if (!foundPriority) {
        return res.status(404).json({
          error: "Priority not found",
          message: "A priority with the provided ID not exists.",
        });
      }

      const foundStatus = await prisma.status.findUnique({
        where: { id: status_id, deleted_at: null },
      });

      if (!foundStatus) {
        return res.status(404).json({
          error: "Status not found",
          message: "A status with the provided ID not exists.",
        });
      }

      const createdRequest = await prisma.request.create({
        data: { hospital_id, medication_id, priority_id, status_id, quantity },
        select: {
          id: true,
          hospital: true,
          medication: true,
          priority: true,
          status: true,
          quantity: true,
          created_at: true,
          updated_at: true,
        },
      });

      return res.status(201).json({
        message: "Request created successfully.",
        data: createdRequest,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }
}

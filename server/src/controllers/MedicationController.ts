import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class MedicationController {
  async index(req: Request, res: Response) {
    try {
      const foundMedications = await prisma.medication.findMany({
        where: { deleted_at: null },
        select: {
          id: true,
          approvation_date: true,
          medication_type: true,
          active_principle: true,
          pregnancy_risk: true,
          prescription: true,
          laboratory: true,
          request: true,
          pharmacological_group: true,
          therapeuthic_indication: true,
          equivalent_generic: true,
          equivalent_similar: true,
          generic_equivalent_to: true,
          similar_equivalent_to: true,
          created_at: true,
          updated_at: true,
        },
      });

      return res.status(200).json({
        message: "Medications found succesfully.",
        data: foundMedications,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async view(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const foundMedication = await prisma.medication.findUnique({
        where: { id, deleted_at: null },
        select: {
          id: true,
          approvation_date: true,
          medication_type: true,
          active_principle: true,
          pregnancy_risk: true,
          prescription: true,
          laboratory: true,
          request: true,
          pharmacological_group: true,
          therapeuthic_indication: true,
          equivalent_generic: true,
          equivalent_similar: true,
          generic_equivalent_to: true,
          similar_equivalent_to: true,
          created_at: true,
          updated_at: true,
        },
      });

      if (!foundMedication) {
        return res.status(404).json({
          error: "Medication not found",
          message: "A medication with the provided ID does not exist.",
        });
      }

      return res.status(200).json({
        message: "Medication found succesfully",
        data: foundMedication,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }
}

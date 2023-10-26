import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class MedicationController {
  async index(req: Request, res: Response) {
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
  }
}

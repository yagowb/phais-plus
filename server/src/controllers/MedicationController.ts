import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BularioController } from "./BularioController";

const prisma = new PrismaClient();
const bulario = new BularioController();

export class MedicationController {
  async index(req: Request, res: Response) {
    try {
      await bulario.listarTodosMedicamentos();

      const foundMedications = await prisma.medication.findMany({
        where: { deleted_at: null },
        select: {
          id: true,
          name: true,
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
          name: true,
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
        const medicamentoBulario = await bulario.pesquisarMedicamento(id);

        if (!medicamentoBulario) {
          return res.status(404).json({
            error: "Medication not found",
            message: "A medication with the provided ID does not exist.",
          });
        }

        return res.status(200).json({
          message: "Medication details found successfully",
          data: medicamentoBulario,
        });
      }

      return res.status(200).json({
        message: "Medication found successfully",
        data: foundMedication,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async search(req: Request, res: Response) {
    try {
      const { search } = req.query;

      if (typeof search === "string") {
        const medicamentosEncontrados = await bulario.pesquisarMedicamento(
          search
        );

        return res.status(200).json({
          message: "Medications found successfully",
          data: medicamentosEncontrados,
        });
      } else {
        return res.status(400).json({
          error: "Invalid search parameter",
          message: 'The "search" parameter must be a string.',
        });
      }
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const {
        name,
        medication_type,
        active_principle,
        pregnancy_risk,
        prescription,
        pharmacological_group,
        therapeuthic_indication,
        equivalent_generic,
        equivalent_similar,
        approvation_date,
        request,
        laboratory,
      } = req.body;

      const novoMedicamento = await prisma.medication.create({
        data: {
          name,
          approvation_date,
          medication_type,
          request,
          laboratory,
          active_principle,
          pregnancy_risk,
          prescription,
          pharmacological_group,
          therapeuthic_indication,
          equivalent_generic,
          equivalent_similar,
        },
      });

      return res.status(201).json({
        message: "Medication created successfully",
        data: novoMedicamento,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedMedication = await prisma.medication.delete({
        where: {
          id,
        },
      });

      return res.status(200).json({
        message: "Medication deleted successfully",
        data: deletedMedication,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async fullUpdate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        name,
        medication_type,
        active_principle,
        pregnancy_risk,
        prescription,
        pharmacological_group,
        therapeuthic_indication,
        equivalent_generic,
        equivalent_similar,
        approvation_date,
        request,
        laboratory,
      } = req.body;

      const updatedMedication = await prisma.medication.update({
        where: { id },
        data: {
          name,
          approvation_date,
          medication_type,
          request,
          laboratory,
          active_principle,
          pregnancy_risk,
          prescription,
          pharmacological_group,
          therapeuthic_indication,
          equivalent_generic,
          equivalent_similar,
        },
      });

      return res.status(200).json({
        message: "Medication updated successfully",
        data: updatedMedication,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }

  async partialUpdate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedFields = req.body;

      const medicamentoExistente = await prisma.medication.findUnique({
        where: { id },
      });

      if (!medicamentoExistente) {
        return res.status(404).json({
          error: "Medication not found",
          message: "A medication with the provided ID does not exist.",
        });
      }

      const medicamentoAtualizado = await prisma.medication.update({
        where: { id },
        data: updatedFields,
      });

      return res.status(200).json({
        message: "Medication updated successfully",
        data: medicamentoAtualizado,
      });
    } catch (exception) {
      return res.status(500).json({ error: exception });
    }
  }
}

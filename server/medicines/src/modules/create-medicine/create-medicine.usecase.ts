import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { KafkaSendMessage } from "../../infra/kafka/kafka.producer";
import { formatResponse } from "../../utilities/formatting";

type CreateMedicineRequestBody = {
  name: string;
  medicine_type_id: string;
  active_principle_id: string;
  pregnancy_risk_id?: string;
  prescription_id?: string;
  laboratory_id?: string;
  pharmacological_group_ids?: string[];
  therapeuthic_indication_ids?: string[];
  equivalent_generic_ids?: string[];
  equivalent_similar_ids?: string[];
  approvation_date?: Date;
};

export class CreateMedicineUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: CreateMedicineRequestBody) {
    const {
      name,
      medicine_type_id,
      active_principle_id,
      pregnancy_risk_id,
      prescription_id,
      laboratory_id,
      pharmacological_group_ids,
      therapeuthic_indication_ids,
      equivalent_generic_ids,
      equivalent_similar_ids,
      approvation_date,
    } = body;

    const foundMedicineType = await prismaClient.medicineType.findUnique({
      where: { id: medicine_type_id, deleted_at: null },
    });
    if (!foundMedicineType) {
      return formatResponse(404, "Medicine type not found.");
    }

    const foundActivePrinciple = await prismaClient.activePrinciple.findUnique({
      where: { id: active_principle_id, deleted_at: null },
    });
    if (!foundActivePrinciple) {
      return formatResponse(404, "Active principle not found.");
    }

    if (pregnancy_risk_id) {
      const foundPregnancyRisk = await prismaClient.pregnancyRisk.findUnique({
        where: { id: pregnancy_risk_id, deleted_at: null },
      });
      if (!foundPregnancyRisk) {
        return formatResponse(404, "Pregnancy risk not found.");
      }
    }

    if (prescription_id) {
      const foundPrescription = await prismaClient.prescription.findUnique({
        where: { id: prescription_id, deleted_at: null },
      });
      if (!foundPrescription) {
        return formatResponse(404, "Prescription not found.");
      }
    }

    if (laboratory_id) {
      const foundLaboratory = await prismaClient.laboratory.findUnique({
        where: { id: laboratory_id, deleted_at: null },
      });
      if (!foundLaboratory) {
        return formatResponse(404, "Laboratory not found.");
      }
    }

    if (pharmacological_group_ids) {
      const foundPharmacologicalGroups =
        await prismaClient.pharmacologicalGroup.findMany({
          where: { id: { in: pharmacological_group_ids }, deleted_at: null },
        });

      if (
        foundPharmacologicalGroups.length !== pharmacological_group_ids.length
      ) {
        return formatResponse(404, "Any pharmacological group not found.");
      }
    }

    if (therapeuthic_indication_ids) {
      const foundTherapeuthicIndications =
        await prismaClient.therapeuthicIndication.findMany({
          where: { id: { in: therapeuthic_indication_ids }, deleted_at: null },
        });

      if (
        foundTherapeuthicIndications.length !==
        therapeuthic_indication_ids.length
      ) {
        return formatResponse(404, "Any therapeuthic indication not found.");
      }
    }

    if (equivalent_generic_ids) {
      const foundEquivalentGenerics = await prismaClient.medicine.findMany({
        where: { id: { in: equivalent_generic_ids }, deleted_at: null },
      });

      if (foundEquivalentGenerics.length !== equivalent_generic_ids.length) {
        return formatResponse(404, "Any equivalent generic not found.");
      }
    }

    if (equivalent_similar_ids) {
      const foundEquivalentSimilars = await prismaClient.medicine.findMany({
        where: { id: { in: equivalent_similar_ids }, deleted_at: null },
      });

      if (foundEquivalentSimilars.length !== equivalent_similar_ids.length) {
        return formatResponse(404, "Any equivalent similar not found.");
      }
    }

    const createdMedicine = await prismaClient.medicine.create({
      select: {
        id: true,
        name: true,
        medicine_type: true,
        active_principle: true,
        pregnancy_risk: true,
        prescription: true,
        laboratory: true,
        pharmacological_group: true,
        therapeuthic_indication: true,
        equivalent_generic: true,
        equivalent_similar: true,
        approvation_date: true,
        created_at: true,
        updated_at: true,
      },
      data: {
        name,
        medicine_type_id,
        active_principle_id,
        pregnancy_risk_id,
        prescription_id,
        laboratory_id,
        pharmacological_group: pharmacological_group_ids && {
          connect: pharmacological_group_ids?.map((id) => ({ id })),
        },
        therapeuthic_indication: therapeuthic_indication_ids && {
          connect: therapeuthic_indication_ids?.map((id) => ({ id })),
        },
        equivalent_generic: equivalent_generic_ids && {
          connect: equivalent_generic_ids?.map((id) => ({ id })),
        },
        equivalent_similar: equivalent_similar_ids && {
          connect: equivalent_similar_ids?.map((id) => ({ id })),
        },
        approvation_date: approvation_date ? new Date(approvation_date) : null,
      },
    });

    const kafkaSendMessage = new KafkaSendMessage();
    kafkaSendMessage.execute("medicine-created", {
      id: createdMedicine.id,
      name: createdMedicine.name,
    });

    return formatResponse(
      201,
      "Medicine created successfully.",
      createdMedicine
    );
  }
}

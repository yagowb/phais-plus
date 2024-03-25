import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type GetMedicineRequestBody = {};

export class GetMedicineUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: GetMedicineRequestBody) {
    const { id } = params;

    const foundMedicine = await prismaClient.medication.findUnique({
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

    if (!foundMedicine) {
      return formatResponse(
        404,
        "A medicine with the provided ID does not exist."
      );
    }

    return formatResponse(200, "Medicine found successfully.", foundMedicine);
  }
}

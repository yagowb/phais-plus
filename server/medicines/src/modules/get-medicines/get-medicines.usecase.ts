import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type GetMedicinesRequestBody = {};

export class GetMedicinesUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: GetMedicinesRequestBody) {
    const foundMedications = await prismaClient.medication.findMany({
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

    return formatResponse(
      200,
      "Medications found succesfully.",
      foundMedications
    );
  }
}

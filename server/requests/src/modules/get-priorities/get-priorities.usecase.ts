import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type GetPrioritiesRequestBody = {};

export class GetPrioritiesUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: GetPrioritiesRequestBody) {
    const priorities = await prismaClient.priority.findMany({
      select: { id: true, name: true, created_at: true, updated_at: true },
    });

    return formatResponse(
      200,
      "Priorities retrieved successfully.",
      priorities
    );
  }
}

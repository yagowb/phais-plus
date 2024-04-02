import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type GetStatusesRequestBody = {};

export class GetStatusesUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: GetStatusesRequestBody) {
    const statuses = await prismaClient.status.findMany({
      select: { id: true, name: true, created_at: true, updated_at: true },
    });

    return formatResponse(200, "Statuses retrieved successfully.", statuses);
  }
}

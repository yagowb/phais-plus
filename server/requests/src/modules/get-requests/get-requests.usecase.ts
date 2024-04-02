import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type GetRequestsRequestBody = {};

export class GetRequestsUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: GetRequestsRequestBody) {
    const requests = await prismaClient.request.findMany({
      select: {
        id: true,
        requester_hospital: true,
        attending_hospital: true,
        medicine: true,
        quantity: true,
        priority: true,
        status: true,
        description: true,
        due_date: true,
        return_date: true,
        created_at: true,
        updated_at: true,
      },
    });

    return formatResponse(200, "Requests retrieved successfully.", requests);
  }
}

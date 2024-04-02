import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type GetRequestRequestBody = {};

export class GetRequestUsecase {
  constructor() {}

  async execute(params: ParamsDictionary, body: GetRequestRequestBody) {
    const { id } = params;

    const request = await prismaClient.request.findUnique({
      where: { id, deleted_at: null },
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

    if (!request) {
      return formatResponse(404, "Request not found.");
    }

    return formatResponse(200, "Request successfully retrieved.", request);
  }
}

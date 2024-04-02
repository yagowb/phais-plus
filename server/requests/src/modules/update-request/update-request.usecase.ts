import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type UpdateRequestRequestBody = {
  status_id: string;
  due_date: Date;
  return_date: Date;
};

export class UpdateRequestUsecase {
  constructor() {}

  async execute(params: ParamsDictionary, body: UpdateRequestRequestBody) {
    const { id } = params;
    const { status_id, due_date, return_date } = body;

    if (!status_id && !due_date && !return_date) {
      return formatResponse(
        400,
        "Please provide at least one field to update."
      );
    }

    const foundRequest = await prismaClient.request.findUnique({
      where: { id, deleted_at: null },
    });

    if (!foundRequest) {
      return formatResponse(404, "Request not found.");
    }

    if (status_id) {
      const foundStatus = await prismaClient.status.findUnique({
        where: { id: status_id },
      });

      if (!foundStatus) {
        return formatResponse(404, "Status not found.");
      }
    }

    const updatedRequest = await prismaClient.request.update({
      where: { id },
      data: {
        status_id,
        due_date: due_date ? new Date(due_date) : due_date,
        return_date: return_date ? new Date(return_date) : return_date,
      },
    });

    return formatResponse(200, "Request successfully updated.", updatedRequest);
  }
}

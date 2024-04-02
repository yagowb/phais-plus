import { Request, Response } from "express";
import { GetStatusesUseCase } from "./get-statuses.usecase";
import { formatResponse } from "../../utilities/formatting";

export class GetStatusesController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new GetStatusesUseCase();

    try {
      const { status, json } = await useCase.execute(
        request.params,
        request.body
      );
      return response.status(status).json(json);
    } catch (error) {
      const { status, json } = formatResponse(500, "Internal server error.");
      return response.status(status).json(json);
    }
  }
}

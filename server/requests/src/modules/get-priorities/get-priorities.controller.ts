import { Request, Response } from "express";
import { formatResponse } from "../../utilities/formatting";
import { GetPrioritiesUseCase } from "./get-priorities.usecase";

export class GetPrioritiesController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new GetPrioritiesUseCase();

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

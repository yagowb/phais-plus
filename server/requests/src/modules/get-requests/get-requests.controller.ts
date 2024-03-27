import { Request, Response } from "express";
import { GetRequestsUseCase } from "./get-requests.usecase";
import { formatResponse } from "../../utilities/formatting";

export class GetRequestsController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new GetRequestsUseCase();

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

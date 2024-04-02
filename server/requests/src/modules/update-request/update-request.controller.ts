import { Request, Response } from "express";
import { UpdateRequestUsecase } from "./update-request.usecase";
import { formatResponse } from "../../utilities/formatting";

export class UpdateRequestController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new UpdateRequestUsecase();

    try {
      const { status, json } = await useCase.execute(
        request.params,
        request.body
      );
      return response.status(status).json(json);
    } catch (error) {
      console.log(error);
      const { status, json } = formatResponse(500, "Internal server error.");
      return response.status(status).json(json);
    }
  }
}

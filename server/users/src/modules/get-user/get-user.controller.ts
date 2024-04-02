import { Request, Response } from "express";
import { GetUserUseCase } from "./get-user.usecase";
import { formatResponse } from "../../utilities/formatting";

export class GetUserController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new GetUserUseCase();

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

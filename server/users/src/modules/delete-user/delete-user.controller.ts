import { Request, Response } from "express";
import { DeleteUserUseCase } from "./delete-user.usecase";
import { formatResponse } from "../../utilities/formatting";

export class DeleteUserController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new DeleteUserUseCase();

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

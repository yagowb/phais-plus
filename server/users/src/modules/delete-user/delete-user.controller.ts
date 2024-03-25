import { Request, Response } from "express";
import { DeleteUserUseCase } from "./delete-user.usecase";

export class DeleteUserController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new DeleteUserUseCase();

    try {
      const { statusCode, json } = await useCase.execute(
        request.params,
        request.body
      );
      return response.status(statusCode).json(json);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

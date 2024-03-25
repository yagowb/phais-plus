import { Request, Response } from "express";
import { UpdateUserUseCase } from "./update-user.usecase";

export class UpdateUserController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new UpdateUserUseCase();

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

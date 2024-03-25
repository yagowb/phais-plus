import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.usecase";

export class CreateUserController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new CreateUserUseCase();

    try {
      const { statusCode, json } = await useCase.execute(request.body);
      return response.status(statusCode).json(json);
    } catch (error) {
      response.status(500).json(error);
    }
  }
}

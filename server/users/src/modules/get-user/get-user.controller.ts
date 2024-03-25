import { Request, Response } from "express";
import { GetUserUseCase } from "./get-user.usecase";

export class GetUserController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new GetUserUseCase();

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

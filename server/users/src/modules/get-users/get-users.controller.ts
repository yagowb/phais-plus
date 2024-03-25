import { Request, Response } from "express";
import { GetUsersUseCase } from "./get-users.usecase";

export class GetUsersController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new GetUsersUseCase();

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

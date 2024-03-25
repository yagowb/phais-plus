import { Request, Response } from "express";
import { CreateRequestUsecase } from "./create-request.usecase";

export class CreateRequestController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new CreateRequestUsecase();

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

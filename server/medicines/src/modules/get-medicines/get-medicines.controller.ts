import { Request, Response } from "express";
import { GetMedicinesUseCase } from "./get-medicines.usecase";

export class GetMedicinesController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new GetMedicinesUseCase();

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

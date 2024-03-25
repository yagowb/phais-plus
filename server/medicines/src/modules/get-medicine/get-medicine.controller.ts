import { Request, Response } from "express";
import { GetMedicineUseCase } from "./get-medicine.usecase";

export class GetMedicineController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new GetMedicineUseCase();

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

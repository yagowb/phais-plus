import { Request, Response } from "express";
import { CreateMedicineUseCase } from "./create-medicine.usecase";
import { formatResponse } from "../../utilities/formatting";

export class CreateMedicineController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new CreateMedicineUseCase();

    try {
      const { status, json } = await useCase.execute(
        request.params,
        request.body
      );
      return response.status(status).json(json);
    } catch (error) {
      console.log(error);
      const { status, json } = formatResponse(500, "Internal server error.");
      return response.status(status).json(json);
    }
  }
}

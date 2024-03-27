import { ParamsDictionary } from "express-serve-static-core";
import { formatResponse } from "../../utilities/formatting";
import { prismaClient } from "../../infra/database/prismaClient";

type CreateRequestRequestBody = {
  requester_hospital_id: string;
  attending_hospital_id?: string;
  medicine_id: string;
  priority_id: string;
  status_id: string;
  quantity: number;
  description: string;
  due_date: Date;
  return_date: Date;
};

export class CreateRequestUsecase {
  constructor() {}

  async execute(params: ParamsDictionary, body: CreateRequestRequestBody) {
    const {
      requester_hospital_id,
      attending_hospital_id,
      medicine_id,
      priority_id,
      status_id,
      quantity,
      description,
      due_date,
      return_date,
    } = body;

    if (
      !requester_hospital_id ||
      !medicine_id ||
      !priority_id ||
      !status_id ||
      !quantity ||
      quantity <= 0 ||
      !description ||
      !due_date ||
      !return_date
    ) {
      return formatResponse(400, "Please provide all required fields.");
    }

    const foundRequesterHospital = await prismaClient.hospital.findFirst({
      where: { external_id: requester_hospital_id, deleted_at: null },
    });

    if (!foundRequesterHospital) {
      return formatResponse(
        404,
        "A hospital with the provided requester hospital ID not exists."
      );
    }

    let foundAttendingHospital = null;
    if (attending_hospital_id) {
      foundAttendingHospital = await prismaClient.hospital.findFirst({
        where: { external_id: attending_hospital_id, deleted_at: null },
      });

      if (!foundAttendingHospital) {
        return formatResponse(
          404,
          "A hospital with the provided attending hospital ID not exists."
        );
      }
    }

    const foundMedicine = await prismaClient.medicine.findFirst({
      where: { external_id: medicine_id, deleted_at: null },
    });

    if (!foundMedicine) {
      return formatResponse(404, "A medicine with the provided ID not exists.");
    }

    const foundPriority = await prismaClient.priority.findUnique({
      where: { id: priority_id, deleted_at: null },
    });

    if (!foundPriority) {
      return formatResponse(404, "A priority with the provided ID not exists.");
    }

    const foundStatus = await prismaClient.status.findUnique({
      where: { id: status_id, deleted_at: null },
    });

    if (!foundStatus) {
      return formatResponse(404, "A status with the provided ID not exists.");
    }

    const createdRequest = await prismaClient.request.create({
      data: {
        requester_hospital_id: foundRequesterHospital.id,
        attending_hospital_id: foundAttendingHospital?.id,
        medicine_id: foundMedicine.id,
        priority_id,
        status_id,
        quantity,
        description,
        due_date: new Date(due_date),
        return_date: new Date(return_date),
      },
      select: {
        id: true,
        requester_hospital: true,
        attending_hospital: true,
        medicine: true,
        quantity: true,
        priority: true,
        status: true,
        description: true,
        due_date: true,
        return_date: true,
        created_at: true,
        updated_at: true,
      },
    });

    return formatResponse(201, "Request created successfully.", createdRequest);
  }
}

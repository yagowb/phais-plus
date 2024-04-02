import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type GetUsersRequestBody = {};

export class GetUsersUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: GetUsersRequestBody) {
    const foundUsers = await prismaClient.user.findMany({
      where: { deleted_at: null },
      select: {
        id: true,
        cnpj: true,
        email: true,
        username: true,
        phone: true,
        created_at: true,
        updated_at: true,
      },
    });

    return formatResponse(200, "Users found successfully.", foundUsers);
  }
}

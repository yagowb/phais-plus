import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type GetUserRequestBody = {};

export class GetUserUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: GetUserRequestBody) {
    const { id } = params;

    const foundUser = await prismaClient.user.findUnique({
      where: { id, deleted_at: null },
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

    if (!foundUser) {
      return formatResponse(404, "A user with the provided ID does not exist.");
    }

    return formatResponse(200, "User found successfully.", foundUser);
  }
}

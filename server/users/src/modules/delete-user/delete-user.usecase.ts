import { randomUUID } from "node:crypto";
import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";

type DeleteUserRequestBody = {};

export class DeleteUserUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: DeleteUserRequestBody) {
    const { id } = params;

    const foundUser = await prismaClient.user.findUnique({
      where: { id, deleted_at: null },
    });

    if (!foundUser) {
      return formatResponse(404, "Please provide the ID of an existing user.");
    }

    const uuid = randomUUID();

    await prismaClient.user.update({
      where: { id },
      data: {
        cnpj: `${uuid}${foundUser.cnpj}`,
        password: uuid,
        phone: uuid,
        deleted_at: new Date(),
      },
    });

    return formatResponse(204, "User deleted successfully.");
  }
}

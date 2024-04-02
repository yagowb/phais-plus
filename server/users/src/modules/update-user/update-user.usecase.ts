import bcrypt from "bcrypt";
import { ParamsDictionary } from "express-serve-static-core";
import { prismaClient } from "../../infra/database/prismaClient";
import { formatResponse } from "../../utilities/formatting";
import {
  validateDocument,
  validateEmail,
  validatePassword,
} from "../../utilities/validation";

type UpdateUserRequestBody = {
  cnpj?: string;
  email?: string;
  username?: string;
  password?: string;
  phone?: string;
};

export class UpdateUserUseCase {
  constructor() {}

  async execute(params: ParamsDictionary, body: UpdateUserRequestBody) {
    const { id } = params;
    const { cnpj, email, username, password, phone } = body;

    if (!cnpj && !email && !username && !password && !phone) {
      return formatResponse(
        400,
        "Please provide at least one field to update."
      );
    }

    if (
      cnpj === null ||
      email === null ||
      username === null ||
      password === null ||
      phone === null
    ) {
      return formatResponse(400, "None of these fields can be null.");
    }

    if (cnpj && !validateDocument(cnpj)) {
      return formatResponse(400, "Please provide a valid CNPJ.");
    }

    if (email && !validateEmail(email)) {
      return formatResponse(400, "Please provide a valid email address.");
    }

    let encryptedPassword: string | undefined = undefined;
    if (password) {
      if (!validatePassword(password)) {
        return formatResponse(
          400,
          "The password must be at least 8 characters."
        );
      }

      encryptedPassword = await bcrypt.hash(password, 10);
    }

    const foundUser = await prismaClient.user.findUnique({
      where: { id, deleted_at: null },
    });

    if (!foundUser) {
      return formatResponse(404, "A user with the provided ID does not exist.");
    }

    if (cnpj) {
      const foundUserByCnpj = await prismaClient.user.findUnique({
        where: { cnpj, deleted_at: null },
        select: { cnpj: true },
      });

      if (foundUserByCnpj && foundUserByCnpj.cnpj !== foundUser.cnpj) {
        return formatResponse(
          409,
          "A user with the provided CNPJ already exists."
        );
      }
    }

    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: {
        cnpj,
        email,
        username,
        password: encryptedPassword,
        phone,
      },
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

    return formatResponse(200, "User updated successfully.", updatedUser);
  }
}

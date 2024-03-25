import { Router } from "express";
import { CreateUserController } from "../modules/create-user/create-user.controller";

const router = Router();

router.post("/", (request, response) => {
  new CreateUserController().handle(request, response);
});

export { router };

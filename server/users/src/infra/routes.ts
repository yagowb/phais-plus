import { Router } from "express";
import { GetUsersController } from "../modules/get-users/get-users.controller";
import { CreateUserController } from "../modules/create-user/create-user.controller";

const router = Router();

router.get("/", (request, response) => {
  new GetUsersController().handle(request, response);
});
router.post("/", (request, response) => {
  new CreateUserController().handle(request, response);
});

export { router };

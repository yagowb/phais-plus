import { Router } from "express";
import { GetUsersController } from "../modules/get-users/get-users.controller";
import { GetUserController } from "../modules/get-user/get-user.controller";
import { CreateUserController } from "../modules/create-user/create-user.controller";

const router = Router();

router.get("/", new GetUsersController().handle);
router.get("/:id", new GetUserController().handle);
router.post("/", new CreateUserController().handle);

export { router };

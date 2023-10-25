import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.get("/", userController.index);
router.post("/", userController.create);
router.delete("/:id", userController.destroy);

export { router };

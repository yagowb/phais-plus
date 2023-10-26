import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.use(authMiddleware);

router.get("/", userController.index);
router.post("/", userController.create);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

export { router };

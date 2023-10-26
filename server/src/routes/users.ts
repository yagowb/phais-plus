import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.get("/", authMiddleware, userController.index);
router.post("/", authMiddleware, userController.create);
router.patch("/:id", authMiddleware, userController.update);
router.delete("/:id", authMiddleware, userController.destroy);

export { router };

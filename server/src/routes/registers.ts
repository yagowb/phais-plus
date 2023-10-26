import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { RegisterController } from "../controllers/RegisterController";

const router = Router();
const registerController = new RegisterController();

router.get("/", authMiddleware, registerController.index);
router.post("/", registerController.create);
router.patch("/:id", authMiddleware, registerController.update);
router.delete("/:id", authMiddleware, registerController.destroy);

export { router };

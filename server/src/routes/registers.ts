import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { RegisterController } from "../controllers/RegisterController";

const router = Router();
const registerController = new RegisterController();

router.get("/", authMiddleware, registerController.index);
router.get("/:id", authMiddleware, registerController.view);
router.post("/", registerController.create);
router.post("/:id/approve", authMiddleware, registerController.approve);
router.post("/:id/disapprove", authMiddleware, registerController.disapprove);
router.patch("/:id", authMiddleware, registerController.update);
router.delete("/:id", authMiddleware, registerController.destroy);

export { router };

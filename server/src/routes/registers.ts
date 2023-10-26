import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { RegisterController } from "../controllers/RegisterController";

const router = Router();
const registerController = new RegisterController();

router.use(authMiddleware);

router.get("/", registerController.index);
router.post("/", registerController.create);
router.patch("/:id", registerController.update);
router.delete("/:id", registerController.destroy);

export { router };

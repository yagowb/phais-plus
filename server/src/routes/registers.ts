import { Router } from "express";
import { RegisterController } from "../controllers/RegisterController";

const router = Router();
const registerController = new RegisterController();

router.get("/", registerController.index);
router.post("/", registerController.create);
router.patch("/:id", registerController.update);
router.delete("/:id", registerController.destroy);

export { router };

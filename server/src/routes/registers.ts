import { Router } from "express";
import { RegisterController } from "../controllers/RegisterController";

const router = Router();
const registerController = new RegisterController();

router.get("/", registerController.index);

export { router };

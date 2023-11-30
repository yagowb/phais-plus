import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { RequestController } from "../controllers/RequestController";

const router = Router();
const requestController = new RequestController();

router.get("/", authMiddleware, requestController.index);

export { router };

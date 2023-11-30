import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { RequestController } from "../controllers/RequestController";

const router = Router();
const requestController = new RequestController();

router.get("/", authMiddleware, requestController.index);
router.post("/", authMiddleware, requestController.create);
router.patch("/:id", authMiddleware, requestController.partialUpdate);
router.put("/:id", authMiddleware, requestController.fullUpdate);
router.delete("/:id", authMiddleware, requestController.destroy);

export { router };

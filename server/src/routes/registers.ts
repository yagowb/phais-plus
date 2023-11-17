import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { RegisterController } from "../controllers/RegisterController";

const router = Router();
const registerController = new RegisterController();

router.get("/", authMiddleware, registerController.index);
router.get("/:id", authMiddleware, registerController.view);
router.post("/", registerController.create);
router.patch("/:id", authMiddleware, registerController.partialUpdate);
router.put("/:id", authMiddleware, registerController.fullUpdate);
router.delete("/:id", authMiddleware, registerController.destroy);

router.post("/:id/approve", authMiddleware, registerController.approve);
router.post("/:id/disapprove", authMiddleware, registerController.disapprove);

export { router };

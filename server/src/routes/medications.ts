import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { MedicationController } from "../controllers/MedicationController";

const router = Router();
const medicationController = new MedicationController();

router.get("/", authMiddleware, medicationController.index);
router.get("/:id", authMiddleware, medicationController.view);

export { router };

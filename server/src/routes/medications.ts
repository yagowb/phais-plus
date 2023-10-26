import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { MedicationController } from "../controllers/MedicationController";

const router = Router();
const medicationController = new MedicationController();

router.use(authMiddleware);

router.get("/", medicationController.index);
router.get("/:id", medicationController.view);

export { router };

import { Router } from "express";
import { MedicationController } from "../controllers/MedicationController";

const router = Router();
const medicationController = new MedicationController();

router.get("/", medicationController.index);

export { router };

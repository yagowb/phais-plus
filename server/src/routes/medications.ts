import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { MedicationController } from "../controllers/MedicationController";

const router = Router();
const medicationController = new MedicationController();

router.get("/", authMiddleware, medicationController.index); 
router.get("/search", authMiddleware, medicationController.search);
router.post("/", authMiddleware, medicationController.create);

router.get("/:id", authMiddleware, medicationController.view);
router.put("/:id", authMiddleware, medicationController.fullUpdate);
router.patch("/:id", authMiddleware, medicationController.partialUpdate);
router.delete("/:id", authMiddleware, medicationController.delete);

export { router };

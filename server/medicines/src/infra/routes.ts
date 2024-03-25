import { Router } from "express";
import { GetMedicinesController } from "../modules/get-medicines/get-medicines.controller";
import { GetMedicineController } from "../modules/get-medicine/get-medicine.controller";

const router = Router();

router.get("/", new GetMedicinesController().handle);
router.get("/:id", new GetMedicineController().handle);

export { router };

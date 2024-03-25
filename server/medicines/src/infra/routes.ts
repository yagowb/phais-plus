import { Router } from "express";
import { GetMedicinesController } from "../modules/get-medicines/get-medicines.controller";

const router = Router();

router.get("/", new GetMedicinesController().handle);

export { router };

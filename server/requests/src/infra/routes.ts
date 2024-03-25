import { Router } from "express";
import { CreateRequestController } from "../modules/create-request/create-request.controller";

const router = Router();

router.post("/", new CreateRequestController().handle);

export { router };

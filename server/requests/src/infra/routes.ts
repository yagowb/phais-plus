import { Router } from "express";
import { GetRequestsController } from "../modules/get-requests/get-requests.controller";
import { CreateRequestController } from "../modules/create-request/create-request.controller";

const router = Router();

router.get("/", new GetRequestsController().handle);
router.post("/", new CreateRequestController().handle);

export { router };

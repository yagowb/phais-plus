import { Router } from "express";
import { GetStatusesController } from "../modules/get-statuses/get-statuses.controller";
import { GetRequestsController } from "../modules/get-requests/get-requests.controller";
import { GetRequestController } from "../modules/get-request/get-request.controller";
import { CreateRequestController } from "../modules/create-request/create-request.controller";

const router = Router();

router.get("/status", new GetStatusesController().handle);

router.get("/", new GetRequestsController().handle);
router.get("/:id", new GetRequestController().handle);
router.post("/", new CreateRequestController().handle);

export { router };

import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { concernSchema } from "./concerns.validation";
import { concernController } from "./concerns.controller";

const router = Router();

router.post(
  "/create",
  validateRequest(concernSchema),
  concernController.createconcern
);

router.get("/", concernController.getAllConcerns);

export const concernRoutes = router;

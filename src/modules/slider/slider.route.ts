import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { sliderController } from "./slider.controller";
import { sliderSchema } from "./slider.validation";

const router = Router();



router.post(
  "/create",
  validateRequest(sliderSchema),
  sliderController.createSlider
);

router.get("/", sliderController.getAllSlider);

router.delete(
  "/delete/:id",
  sliderController.deleteSlider
);

router.patch(
  "/update/:id",
  sliderController.updateSlider
);
export const sliderRoutes = router;

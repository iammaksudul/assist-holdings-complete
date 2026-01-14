import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { scheduleSchema } from "./schedule.validation";
import { ScheduleController } from "./schedule.controller";


const router = Router();

router.post(
  "/create",
  validateRequest(scheduleSchema),
  ScheduleController.createSchedule
);

router.get("/", ScheduleController.getAllSchedules);

router.delete(
  "/delete/:id",
  ScheduleController.deleteSchedule
);

export const ScheduleRoutes = router;

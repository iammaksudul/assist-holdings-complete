import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { registerUserSchema } from "./user.validation";
import { UserController } from "./user.controller";
const router = Router();

router.post(
  "/register",
  validateRequest(registerUserSchema),
  UserController.createUser
);

router.get("/", UserController.getAllAdmin);

// router.delete("/delete/:id",  UserController.deleteAdmin);

export const UserRoutes = router;

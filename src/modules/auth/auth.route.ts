import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { loginUserSchema } from "./auth.validation";
import { AuthController } from "./auth.controller";

const router = Router();

router.post(
  "/login",
  validateRequest(loginUserSchema),
  AuthController.loginUser
);
router.post("/change-password", AuthController.changePassword)

export const AuthRoutes = router;
import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { contactSchema } from "./contact.validation";
import { contactController } from "./contact.controller";

const router = Router();

router.post(
  "/create",
  validateRequest(contactSchema),
  contactController.createContact
);

router.get("/", contactController.getContacts);

export const contactRoutes = router;

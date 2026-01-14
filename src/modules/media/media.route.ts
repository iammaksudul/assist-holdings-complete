import { Router } from "express";
import { mediaController } from "./media.controller";

const router = Router();

router.post(
  "/create",
  mediaController.createMedia
);

router.get("/", mediaController.getAllMedia);

router.delete(
  "/delete/:id",
  mediaController.deleteMedia
);
router.patch(
  "/update/:id",
  mediaController.updateMedia
);

export const mediaRoutes = router;

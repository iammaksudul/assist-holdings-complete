import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { newsSchema } from "./news.validation";
import { newsController } from "./news.controller";

const router = Router();

router.post(
  "/create",
  validateRequest(newsSchema),
  newsController.createnews
);

router.get("/", newsController.getAllnewss);

export const newsRoutes = router;

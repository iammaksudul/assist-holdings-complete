import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { blogSchema } from "./blogs.validation";
import { blogsController } from "./blogs.controller";

const router = Router();

router.post(
  "/create",
  validateRequest(blogSchema),
  blogsController.createblogs
);

router.get("/", blogsController.getAllblogss);

router.delete(
  "/delete/:id",
  blogsController.deleteBlogs
);

router.patch(
  "/update/:id",
  blogsController.updateBlogs
);

export const blogsRoutes = router;

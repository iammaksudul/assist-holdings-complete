import { z } from "zod";
export const sliderSchema = z.object({
  text: z.string(),
  title: z.string().min(2, "Name must be at least 2 characters long"),
  Image: z.string(),
});

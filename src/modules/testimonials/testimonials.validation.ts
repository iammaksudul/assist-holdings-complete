import { z } from "zod";

export const testimonialSchema = z.object({
  content: z.string(),
  name: z.string(),
  Image: z.string()
});

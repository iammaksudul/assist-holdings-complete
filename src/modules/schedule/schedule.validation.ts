import { z } from "zod";

export const scheduleSchema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email address"),
  date: z.string(),
  phone: z.string(),
  message: z.string(),
});

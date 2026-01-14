import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z.string(),
  whatsappNumber: z.string(),
  fbLink: z.string(),
  instagramLink: z.string(),
  linkedInLink: z.string(),
  youtubeLink: z.string(),
  address: z.string(),
  workTime: z.string(),
  workSchedule: z.string(),
  logo: z.string().url("Logo must be a valid URL"),
});

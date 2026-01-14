import { z } from "zod";

export const StatusEnum = z.enum(["PENDING", "CONFIRMED", "REJECTED"]);

export const enquirySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  secondPhone: z.string(),
  location: z.string(),
  landSize: z.string(),
  attractiveFeature: z.string(),
  message: z.string(),
  email: z.string(),
});

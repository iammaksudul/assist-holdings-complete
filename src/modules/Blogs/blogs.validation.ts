import { z } from "zod";

// --- Status enum (same as your Prisma model enum) ---
export const StatusEnum = z.enum(["PENDING", "CONFIRMED", "REJECTED"]);

export const blogSchema = z.object({
  title: z.string(),
  content: z.string(),
  Image: z.string(),
  status: StatusEnum.default("CONFIRMED").optional(),
  createdAt: z.date().optional(),
});

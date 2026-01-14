import { z } from "zod";

// --- Enum matching your Prisma Status enum ---
export const StatusEnum = z.enum(["PENDING", "CONFIRMED", "REJECTED"]);

export const newsSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters long")
    .max(150, "Title cannot exceed 150 characters"),
  content: z
    .string()
    .min(10, "Content must be at least 10 characters long")
    .max(10000, "Content cannot exceed 10000 characters"),
  Image: z.string().url("Image must be a valid URL"),
  status: StatusEnum.default("CONFIRMED"),
  createdAt: z.date().optional(),
});

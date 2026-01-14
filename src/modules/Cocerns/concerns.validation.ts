import { z } from "zod";

// --- If Prisma has this enum, reuse it here ---
export const StatusEnum = z.enum(["PENDING", "CONFIRMED", "REJECTED"]);

export const concernSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters long")
    .max(100, "Title cannot exceed 100 characters"),
  content: z
    .string()
    .min(10, "Content must be at least 10 characters long")
    .max(2000, "Content cannot exceed 2000 characters"),
  Image: z.string().url("Image must be a valid URL"),
  status: StatusEnum.default("CONFIRMED"),
  createdAt: z.date().optional(),
});

import { z } from "zod";

export const StatusEnum = z.enum([" CONFIRMED", "CANCELLED"]);
export const photoSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters long")
    .max(150, "Title cannot exceed 150 characters"),
  Image: z.string().url("Image must be a valid URL"),
  status: StatusEnum.default(" CONFIRMED"),
  createdAt: z.date().optional(),
});
export const videoSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters long")
    .max(150, "Title cannot exceed 150 characters"),
  url: z.string().url("URL must be a valid video link"),
  status: StatusEnum.default(" CONFIRMED"),
  createdAt: z.date().optional(),
});

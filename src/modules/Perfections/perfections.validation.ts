import { z } from "zod";

export const perfectionSchema = z.object({
  Title: z.string(),
  Type: z.string(),
  Orientation: z.string(),
  Address: z.string(),
  FrontRoad: z.string(),
  LandSize: z.string(),
  ApartmentSize: z.string(),
  NumberOfUnits: z.string(),
  NumberOfParking: z.string(),
  NumberOfFloors: z.string(),
});

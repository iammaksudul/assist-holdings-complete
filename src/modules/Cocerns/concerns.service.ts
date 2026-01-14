import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createconcern = async (data: any) => {
  const result = await prisma.concerns.create({
    data: {
      ...data,
    },
  });
  // hide password
  return result;
};

const getAllconcern = async () => {
  const user = await prisma.concerns.findMany();

  return user;
};

export const concernServices = {
  createconcern,
  getAllconcern,
};

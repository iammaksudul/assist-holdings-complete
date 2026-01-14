import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPerfection = async (data: any) => {
  const result = await prisma.perfections.create({
    data: {
      ...data,
    },
  });
  return result;
};

const updatePerfection = async (id: string, data: any) => {
  const result = await prisma.perfections.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });
  return result;
};

const deletePerfection = async (id: string) => {
  const result = await prisma.perfections.delete({
    where: {
      id
    },
  });
  return result;
};

const getAllPerfection = async () => {
  const user = await prisma.perfections.findMany({
    orderBy:{
      createdAt:"desc"
    }
  });

  return user;
};

export const perfectionServices = {
  createPerfection,
  getAllPerfection,
  updatePerfection,
  deletePerfection
};

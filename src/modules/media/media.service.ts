import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createMedia = async (data: any) => {
  const result = await prisma.media.create({
    data: {
      ...data,
    },
  });
  return result;
};

const getAllMedia = async () => {
  const user = await prisma.media.findMany();

  return user;
};

const deleteMedia = async (id: string) => {
  const result = await prisma.media.delete({
    where: {
      id,
    },
  });
  return result;
};

const updateMedia = async (id: string, data: any) => {
  const result = await prisma.media.update({
    where: {
      id,
    },
    data: data,
  });
  return result;
};

export const mediaServices = {
  createMedia,
  getAllMedia,
  deleteMedia,
  updateMedia
};

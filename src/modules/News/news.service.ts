import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createnews = async (data: any) => {
  const result = await prisma.news.create({
    data: {
      ...data,
    },
  });
  // hide password
  return result;
};

const getAllnews = async () => {
  const user = await prisma.news.findMany();

  return user;
};

export const newsServices = {
  createnews,
  getAllnews,
};

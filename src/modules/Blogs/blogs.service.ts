import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const createblogs = async (data: any) => {
  const result = await prisma.blogs.create({
    data: {
      ...data,
    },
  });
  // hide password
  return result;
};

const getAllblogs = async () => {
  const user = await prisma.blogs.findMany();

  return user;
};

const deleteBlogs = async (id: string) => {
  const result = await prisma.blogs.delete({
    where: {
      id
    },
  });
  return result;
};

const updateBlogs = async (id: string, data: any) => {
  const result = await prisma.blogs.update({
    where: {
      id,
    },
    data: data,
  });
  return result;
};



export const blogsServices = {
  createblogs,
  getAllblogs,
  deleteBlogs,
  updateBlogs
};

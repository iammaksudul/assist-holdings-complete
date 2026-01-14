import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createEnquiry = async (data: any) => {
  const result = await prisma.enquiry.create({
    data: {
      ...data,
    },
  });
  return result;
};

const getAllEnquiry = async () => {
  const user = await prisma.enquiry.findMany();

  return user;
};

const deleteEnquiry = async (id: string) => {
  const user = await prisma.enquiry.delete({
    where: {
      id,
    },
  });

  return user;
};

export const EnquiryServices = {
  createEnquiry,
  getAllEnquiry,
  deleteEnquiry,
};

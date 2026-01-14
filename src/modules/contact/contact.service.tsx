import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createOrUpdateContact = async (data: any) => {
  const result = await prisma.contact.upsert({
    where: { id: "contact_info" }, 
    update: { ...data },
    create: { id: "contact_info", ...data },
  });
  return result;
};


const getContacts = async () => {
  const user = await prisma.news.findMany();
  return user;
};

export const contactServices = {
  createOrUpdateContact,
  getContacts,
};

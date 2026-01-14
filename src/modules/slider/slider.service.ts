import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createslider = async (data: any) => {
  const result = await prisma.slider.create({
    data: {
      ...data,
    },
  });
  return result;
};

const getAllslider = async () => {
  const user = await prisma.slider.findMany();

  return user;
};

const deleteSlider = async (id: string) => {
  const result = await prisma.slider.delete({
    where: {
      id,
    },
  });
  return result;
};

const updateSlider = async (id: string, data: any) => {
  const result = await prisma.slider.update({
    where: {
      id,
    },
    data: data,
  });
  return result;
};

export const sliderServices = {
  createslider,
  getAllslider,
  deleteSlider,
  updateSlider,
};

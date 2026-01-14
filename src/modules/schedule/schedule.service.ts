import { PrismaClient } from "@prisma/client";
import { scheduleEmailTemplate } from "../../utils/sendEmailTemplete";
import sendEmail from "../../utils/sendMailByNodeMailer";

const prisma = new PrismaClient();

const createSchedule = async (data: any) => {
  const result = await prisma.schedule.create({
    data: {
      ...data,
    },
  });

  const { subject, html } = scheduleEmailTemplate(result);

  await sendEmail(result.email, subject, html);

  return {
    data: result,
  };
};

const getSchedules = async () => {
  const user = await prisma.schedule.findMany();
  return user;
};


const deleteSchedule = async (id: string) => {
  const result = await prisma.schedule.delete({
    where: {
      id
    },
  });
  return result;
};


export const ScheduleServices = {
  createSchedule,
  getSchedules,
  deleteSchedule
};

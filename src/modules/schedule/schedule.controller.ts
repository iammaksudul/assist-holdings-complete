import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { ScheduleServices } from "./schedule.service";


export const createSchedule = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  ScheduleServices.createSchedule(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Schedule created successfully",
      data: result,
    });
  }
);

const getAllSchedules = catchAsync(async (req: Request, res: Response) => {
  const result = await  ScheduleServices.getSchedules();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Schedule retrieved successfully",
    data: result,
  });
});
const deleteSchedule = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await ScheduleServices.deleteSchedule(id);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Schedule deleted successfully",
    data: result,
  });
});



export const  ScheduleController = {
  createSchedule,
  getAllSchedules,
  deleteSchedule
};

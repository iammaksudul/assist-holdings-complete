import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { concernServices } from "./concerns.service";

export const createconcern = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  concernServices.createconcern(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: " concern created successfully",
      data: result,
    });
  }
);

const getAllConcerns = catchAsync(async (req: Request, res: Response) => {
  const result = await  concernServices.getAllconcern();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " concern got successfully",
    data: result,
  });
});

export const  concernController = {
  createconcern,
  getAllConcerns,
};

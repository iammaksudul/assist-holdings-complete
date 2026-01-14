import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { newsServices } from "./news.service";

export const createnews = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  newsServices.createnews(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: " news created successfully",
      data: result,
    });
  }
);

const getAllnewss = catchAsync(async (req: Request, res: Response) => {
  const result = await  newsServices.getAllnews();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " news got successfully",
    data: result,
  });
});

export const  newsController = {
  createnews,
  getAllnewss,
};

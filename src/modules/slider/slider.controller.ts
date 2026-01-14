import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { sliderServices } from "./slider.service";

const createSlider = catchAsync(async (req: Request, res: Response) => {
  const result = await sliderServices.createslider(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "slider created successfully",
    data: result,
  });
});

const getAllSlider = catchAsync(async (req: Request, res: Response) => {
  const result = await sliderServices.getAllslider();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "slider got successfully",
    data: result,
  });
});

const deleteSlider = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await sliderServices.deleteSlider(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "slider deleted successfully",
    data: result,
  });
});

const updateSlider = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await sliderServices.updateSlider(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "slider updated successfully",
    data: result,
  });
});

export const sliderController = {
  createSlider,
  getAllSlider,
  deleteSlider,
  updateSlider,
};

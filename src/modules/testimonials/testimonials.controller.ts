import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { testimonialsServices } from "./testimonials.service";

export const createTestimonials = catchAsync(
  async (req: Request, res: Response) => {
    const result = await testimonialsServices.createtestimonials(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "testimonials created successfully",
      data: result,
    });
  }
);

const getAllTestimonial = catchAsync(async (req: Request, res: Response) => {
  const result = await testimonialsServices.getAlltestimonials();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "testimonials got successfully",
    data: result,
  });
});

const deleteTestimonial = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await testimonialsServices.deleteTestimonial(id);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "testimonials deleted successfully",
    data: result,
  });
});

const updateTestimonial = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await testimonialsServices.updateTestimonial(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "testimonials updated successfully",
    data: result,
  });
});

export const testimonialsController = {
  createTestimonials,
  getAllTestimonial,
  deleteTestimonial,
  updateTestimonial
};

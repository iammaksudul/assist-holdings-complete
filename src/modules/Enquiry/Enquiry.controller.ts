import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { EnquiryServices } from "./Enquiry.service";

export const createEnquiry = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  EnquiryServices.createEnquiry(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: " Enquiry created successfully",
      data: result,
    });
  }
);

const getAllEnquirys = catchAsync(async (req: Request, res: Response) => {
  const result = await  EnquiryServices.getAllEnquiry();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Enquiry got successfully",
    data: result,
  });
});

const deleteEnquiry = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const result = await  EnquiryServices.deleteEnquiry(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Enquiry deleted successfully",
    data: result,
  }); 
});

export const  EnquiryController = {
  createEnquiry,
  getAllEnquirys,
  deleteEnquiry
};

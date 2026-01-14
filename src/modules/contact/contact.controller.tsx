import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { contactServices } from "./contact.service";


export const createContact = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  contactServices.createOrUpdateContact(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Contact created successfully",
      data: result,
    });
  }
);

const getContacts = catchAsync(async (req: Request, res: Response) => {
  const result = await  contactServices.getContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contact got successfully",
    data: result,
  });
});



export const  contactController = {
  createContact,
  getContacts,
};

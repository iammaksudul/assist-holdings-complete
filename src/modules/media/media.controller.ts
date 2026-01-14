import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { mediaServices } from "./media.service";

export const createMedia = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  mediaServices.createMedia(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: " media created successfully",
      data: result,
    });
  }
);

const getAllMedia = catchAsync(async (req: Request, res: Response) => {
  const result = await  mediaServices.getAllMedia();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " media got successfully",
    data: result,
  });
});

const deleteMedia = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await mediaServices.deleteMedia(id);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "media deleted successfully",
    data: result,
  });
});

const updateMedia = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await mediaServices.updateMedia(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "media updated successfully",
    data: result,
  });
});



export const  mediaController = {
createMedia,
getAllMedia,
deleteMedia,
updateMedia
};

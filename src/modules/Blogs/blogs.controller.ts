import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { blogsServices } from "./blogs.service";

export const createblogs = catchAsync(
  async (req: Request, res: Response) => {
    const result = await  blogsServices.createblogs(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: " blogs created successfully",
      data: result,
    });
  }
);

const getAllblogss = catchAsync(async (req: Request, res: Response) => {
  const result = await  blogsServices.getAllblogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " blogs got successfully",
    data: result,
  });
});

const deleteBlogs = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await blogsServices.deleteBlogs(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs deleted successfully",
    data: result,
  });
});

const updateBlogs = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await blogsServices.updateBlogs(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs Updated successfully",
    data: result,
  });
});


export const  blogsController = {
  createblogs,
  getAllblogss,
  deleteBlogs,
  updateBlogs
};

import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { AuthService } from "./auth.service";
import { JwtPayload } from "jsonwebtoken";


interface ChangePasswordRequest extends Request {
  body: {
    oldPassword: string;
    newPassword: string;
    userId: string;
    userEmail?: string;
  };
}

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const  token  = await AuthService.loginUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login successful",
    data:  token,
  });
});




const changePassword = catchAsync(
  async (req: ChangePasswordRequest, res: Response) => {
    const { oldPassword, newPassword, userId, userEmail } = req.body ;

    // Validate required fields
    if (!userId) {
      return sendResponse(res, {
        success: false,
        statusCode: httpStatus.BAD_REQUEST,
        message: "User ID is required",
        data: null,
      });
    }

    await AuthService.changePassword(oldPassword, newPassword, userId) ;

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Password Changed Successfully",
      data: null,
    });
  }
);


export const AuthController = {
  loginUser,
  changePassword
};

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { envVars } from "../../config/env";
import AppError from "../../helpers/AppError";
import httpStatus from "http-status-codes";

const prisma = new PrismaClient();

const loginUser = async (data: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new AppError(401, "Invalid credentials");

  const valid = await bcrypt.compare(data.password, user.password);
  if (!valid) throw new AppError(401, "Invalid credentials");

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    envVars.JWT_ACCESS_SECRET,
    { expiresIn: "1d" }
  );
  const { password, ...safeUser } = user;

  return { token };
};

const changePassword = async (
  oldPassword: string,
  newPassword: string,
  userId: string
) => {
  // 1. Find user by ID from token
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // 2. Check old password match
  const isOldPasswordMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isOldPasswordMatch) {
    throw new Error("Old password does not match");
  }

  // 3. Hash new password
  const hashedPassword = await bcrypt.hash(newPassword, 12);

  // 4. Update user password
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
    },
  });

  return updatedUser;
};

export const AuthService = {
  loginUser,
  changePassword
};

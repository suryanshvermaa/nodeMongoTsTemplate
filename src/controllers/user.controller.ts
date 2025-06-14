import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import prisma from "../config/db";
import bcrypt from "bcryptjs";
import response from "../utils/response";
import { createToken } from "../middlewares/auth.middleware";

/**
 * @description Create a new user
 * @route POST /api/v1/user/signup
 * @access Public
 * @param {Request} req
 * @param {Response} res
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
	const { name, email, password } = req.body;
	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: await bcrypt.hash(password, 10),
		},
	});
	const token = await createToken(
		{ userId: user.id, email: user.email },
		100
	);
	response(res, 201, "user created successfully", {
		user: { ...user, password: "secured can't displayed" },
		token,
	});
});

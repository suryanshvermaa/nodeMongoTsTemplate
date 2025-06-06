import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import response from "../utils/response";
import { createToken } from "../middlewares/auth.middleware";
import User from "../models/user.model";
import { AppError } from "../utils/error";
import bcrypt from "bcryptjs";

/**
 * @description Create a new user
 * @route POST /api/v1/
 * @access Public
 * @param {Request} req
 * @param {Response} res
 */
export const createUser = asyncHandler(
	async (req: Request, res: Response) => {
		const {email,password,name}=req.body;
		const user=await User.findOne({email});
		if(user) throw new AppError("User already exists",400);
		const hashedPassword=await bcrypt.hash(password,10);
		const newUser=new User({
			email,
			name,
			password:hashedPassword
		})
		await newUser.save();
		const token=await createToken({userId:newUser._id as string,data:{},email},100)
		await newUser.save();
		return response(res,200,"",{token});
	}
);

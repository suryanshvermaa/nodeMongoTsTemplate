import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";

/**
 * @description Create a new user
 * @route POST /api/v1/
 * @access Public
 * @param {Request} req
 * @param {Response} res
 */
export const createUser = asyncHandler(
	async (req: Request, res: Response) => {}
);

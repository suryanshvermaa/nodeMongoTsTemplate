import { Request, Response, NextFunction } from "express";

/**
 * @description Create a new user
 * @route POST /api/v1/users
 * @access Public
 * @param req
 * @param res
 * @param next
 */
export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		
	} catch (err) {
		next(err);
	}
};

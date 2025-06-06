import { Request, Response } from "express";
import { verifyToken } from "../../middlewares/auth.middleware";
const graphqlContext = async ({
	req,
	res,
}: {
	req: Request;
	res: Response;
}) => {
	try {
		const token =
			req.headers["token"] || req.headers.authorization?.split(" ")[1];
		if (!token) throw new Error("Unauthorised");
		const user = await verifyToken(token as string);
		if (!user) throw new Error("Unauthorised");
		return user;
	} catch (error) {
		if (error instanceof Error) throw new Error(error.message);
		else throw new Error("Unauthorised");
	}
};
export default graphqlContext;

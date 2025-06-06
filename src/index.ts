import express, { Request, Response } from "express";
import "dotenv/config";
import router from "./routes";
import cors from "cors";
import response from "./utils/response";
import errorHandler from "./middlewares/error.middleware";
import asyncHandler from "./utils/asyncHandler";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

/**
 * @description health check route
 * @route GET /health
 * @access public
 */
app.get(
	"/health",
	asyncHandler(async (_req: Request, res: Response) => {
		response(res, 200, "healty", {});
	})
);

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server is running on port", port);
});

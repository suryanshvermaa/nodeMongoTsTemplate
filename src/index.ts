import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import router from "./routes";
import dbConnect from "./utils/db";
import cors from "cors";
import response from "./utils/response";
import errorHandler from "./middlewares/error.middleware";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//db connection
dbConnect().catch(() => {
	process.exit(1);
});

/**
 * @description health check route
 * @route GET /health
 * @access public
 */
app.get("/health", (req: Request, res: Response, next: NextFunction) => {
	try {
		response(res, 200, "healty", {});
	} catch (err) {
		next(err);
	}
});
/**
 * @description Error handling middleware
 */
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server is running on port", port);
});

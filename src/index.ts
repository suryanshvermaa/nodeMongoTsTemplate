import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import router from "./routes";
import dbConnect from "./utils/db";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//db connection
dbConnect().catch(() => {
	process.exit(1);
});

//health route
app.get("/health", (req: Request, res: Response, next: NextFunction) => {
	try {
		res.status(200).send("healthy");
	} catch (err) {
		next(err);
	}
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server is running on port", port);
});

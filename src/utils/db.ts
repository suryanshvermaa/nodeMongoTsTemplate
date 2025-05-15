import mongoose from "mongoose";
import "dotenv/config";
const mongoUri = process.env.MONGO_URI!;
const dbConnect = async () => {
	try {
		await mongoose.connect(mongoUri);
		console.log("db connected successfully");
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
		} else {
			console.error("An unknown error occurred:", err);
		}
	}
};
export default dbConnect;

import { Router } from "express";
import userRouter from "./user.routes";
const router = Router();

router.use("/api/v1/user", userRouter);

export default router;
